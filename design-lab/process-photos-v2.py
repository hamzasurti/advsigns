"""Rebuild v2 from originals. Python with Pillow and numpy; no generative edits.
Run from repository root. All crops are source pixels; no output enlargement.
"""
from pathlib import Path
import json, io
import numpy as np
from PIL import Image, ImageOps, ImageDraw, ImageFont, ImageCms

ROOT=Path('public/assets'); OUT=ROOT/'improved-v2'
def read(path):
    im=Image.open(path)
    if im.info.get('icc_profile'):
        im=ImageCms.profileToProfile(im,ImageCms.ImageCmsProfile(io.BytesIO(im.info['icc_profile'])),ImageCms.createProfile('sRGB'),outputMode='RGB')
    return im.convert('RGB')
def tone(im,amount=0,wb=(1,1,1)):
    a=np.asarray(im).astype(np.float32)/255
    # Smooth, restrained midtone/shadow lift, diminishing to zero at white.
    l=np.sum(a*np.array([.2126,.7152,.0722]),axis=2)
    scale=1+amount*(1-l)**2
    a=a*scale[:,:,None]*np.array(wb)
    return Image.fromarray(np.uint8(np.clip(a*255+.5,0,255)))
photos=[]
def save(name,im,edits,quality,best='wide',focal=(.5,.5),reshoot=False,note=''):
    src=ROOT/name; dst=(OUT/name).with_suffix('.jpg'); dst.parent.mkdir(parents=True,exist_ok=True)
    assert im.width<=Image.open(src).width and im.height<=Image.open(src).height
    # Fresh RGB image strips EXIF, ICC and ancillary metadata; pixels are sRGB.
    Image.frombytes('RGB',im.size,im.tobytes()).save(dst,quality=88,subsampling=0,optimize=True)
    photos.append(dict(source=str(src),output=str(dst),width=im.width,height=im.height,focal=dict(x=focal[0],y=focal[1]),best_use=best,quality=quality,edits=edits,reshoot=reshoot,note=note))

# Courthouse: modest local recovery only. Full measured shadow equalisation and
# frequency-separated blending were tested and rejected for seam/chroma artifacts.
name='hero/building-signs.jpg';im=read(ROOT/name)
a=np.asarray(im).astype(np.float32)/255;h,w=a.shape[:2];y,x=np.mgrid[:h,:w]
# Soft matte follows the measured diagonal; all lettering lies inside one region.
edge=915.527-.570573*x
m=np.clip((y-edge+5)/10,0,1);m=m*m*(3-2*m)
# About 0.6 stop in the shade with a small blue-cast reduction, no texture editing.
lin=np.where(a<=.04045,a/12.92,((a+.055)/1.055)**2.4)
gain=np.array([1.70,1.49,1.29]);lin*=1+m[:,:,None]*(gain-1)
a=np.where(lin<=.0031308,12.92*lin,1.055*np.maximum(lin,0)**(1/2.4)-.055)
im=Image.fromarray(np.uint8(np.clip(a*255+.5,0,255))).crop((95,650,960,1190))
save(name,im,['cropped to all three lines of lettering, retaining margin','restrained local shadow exposure and blue-cast reduction with a soft boundary'], 'usable',focal=(.50,.47),reshoot=True,note='Full wall equalisation was tested and rejected: a seam and color blotches looked processed. This conservative alternative retains the diagonal shadow. All letters remain intact; not suitable for further tight cropping.')

name='hero/construction-signage.jpg';im=read(ROOT/name).crop((35,115,1060,1560))
save(name,im,['cropped blurry foreground grass and small edge distractions'],'good','upright',(.51,.47),note='Original lighting retained. The low camera angle remains; stronger perspective correction would stretch the artwork.')

name='hero/lobby-signs.jpg';save(name,read(ROOT/name),[],'weak','thumbnail-only',(.59,.45),True,'left unedited: too small to improve')

name='hero/vehicle-wraps.jpg';im=tone(read(ROOT/name).crop((0,0,1600,1100)),.10)
save(name,im,['trimmed excess pavement below truck','very small shadow lift'],'good',focal=(.49,.48),note='Natural overcast sky and printed wrap colors retained. Leaves and surrounding vehicles remain.')

for name in ['services/banners.jpg','services/building-signs.jpg','services/embroidery.png']:
 save(name,read(ROOT/name),[],'weak' if 'embroidery' not in name else 'usable','thumbnail-only',(.5,.5),True,'left unedited: too small to improve')

name='services/custom-signs.jpg';im=tone(read(ROOT/name).crop((490,0,1470,660)),.22)
save(name,im,['cropped to both lines of lettering, excluding wall controls and most flowers','modest brightness lift with highlights protected'],'usable',focal=(.50,.49),reshoot=True,note='Mirror reflections stay in the letters. A flower stem still enters at the lower left. Very little original headroom; display the complete crop.')

name='services/laser-engraving.jpg';im=read(ROOT/name).rotate(1.0,resample=Image.Resampling.BICUBIC,expand=False).crop((320,690,1850,1060));im=tone(im,.12)
save(name,im,['levelled pen by 1 degree','cropped around the complete imprint, excluding fingers','small brightness lift'],'usable',focal=(.55,.50),reshoot=True,note='A close detail of the imprint, not a whole-pen product photograph. Desk and original pen reflections retained.')

name='services/lobby-signs.jpg';im=tone(read(ROOT/name).crop((190,60,1330,675)),.27)
save(name,im,['cropped to both signs, excluding bright ceiling light and desk clutter','gently opened dark wall tones'],'usable',focal=(.49,.47),note='Wall remains dark brown. Uneven room lighting and the softer right-hand sign remain; no perspective warp of the circular logo.')

name='services/special-projects.jpg';im=read(ROOT/name).crop((0,90,1920,1280))
save(name,im,['trimmed a little empty sky'],'good',focal=(.50,.52),note='Night lighting, brightness and colors left alone.')

name='services/wall-graphics.jpg';im=tone(read(ROOT/name).crop((85,95,1840,1110)),.10,wb=(1.005,1,1.018))
save(name,im,['trimmed most ceiling and some foreground furniture, keeping the complete wall artwork','very small shadow lift and warm-cast reduction'],'good',focal=(.50,.49),note='Kept all main wall lettering and the room context. Furniture and uneven room lighting remain; no artificial whitening of the wall.')

name='services/wraps.png';im=read(ROOT/name).crop((0,85,1189,825));im=tone(im,.30,wb=(1.006,1,.997))
save(name,im,['trimmed some tree canopy and empty road','gently brightened shaded truck tones while protecting bright sky'],'usable',focal=(.51,.50),reshoot=True,note='Backlighting and tree shade remain. Existing smoothed texture limits detail; no sharpening, saturation boost or sky replacement.')

# Match original manifest order.
order=[str(ROOT/p) for p in ['hero/building-signs.jpg','hero/construction-signage.jpg','hero/lobby-signs.jpg','hero/vehicle-wraps.jpg','services/banners.jpg','services/building-signs.jpg','services/custom-signs.jpg','services/embroidery.png','services/laser-engraving.jpg','services/lobby-signs.jpg','services/special-projects.jpg','services/wall-graphics.jpg','services/wraps.png']]
photos.sort(key=lambda p:order.index(p['source']))
manifest=dict(generated='2026-09-30',notes='Originals untouched. No enlargement or object retouching. All files exported as metadata-free sRGB JPEG at quality 88. Unedited entries retain original framing and tones; JPEG export is the only conversion. MicaBella and tgs have large pixel dimensions but insufficient effective detail. focal gives fractions of output dimensions. Review full crops before applying website object-fit.',photos=photos)
(OUT/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')

# Equal image boxes, original on left; no thumbnail is enlarged.
W=2000;RH=720;sheet=Image.new('RGB',(W,RH*len(photos)),(239,239,235));draw=ImageDraw.Draw(sheet)
try:
 font=ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc',22)
 small=ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc',18)
except OSError: font=small=ImageFont.load_default()
for i,p in enumerate(photos):
 for col,key,title in [(0,'source','BEFORE'),(1,'output','AFTER')]:
  im=read(p[key]);im.thumbnail((960,640),Image.Resampling.LANCZOS)
  x=col*1000+(1000-im.width)//2;y=i*RH+(640-im.height)//2+8
  sheet.paste(im,(x,y));name=p['source'].replace('public/assets/','')
  draw.text((col*1000+22,i*RH+656),title+'  |  '+name,font=font,fill=(30,30,30))
  dim=Image.open(p[key]).size;status='original' if col==0 else ('unedited / export only' if not p['edits'] else p['quality'])
  draw.text((col*1000+22,i*RH+686),f'{dim[0]} x {dim[1]}  |  {status}',font=small,fill=(70,70,70))
 draw.line((0,(i+1)*RH-1,W,(i+1)*RH-1),fill=(195,195,190),width=2)
sheet.save('design-lab/photos-before-after-v2.jpg',quality=88,subsampling=0)
# Readable review sections, temporary only.
for start in range(0,len(photos),3):
 sheet.crop((0,start*RH,W,min((start+3)*RH,sheet.height))).save(f'/tmp/photo-v2-review-{start}.jpg',quality=92)
print('Wrote',len(photos),'photos; sheet',sheet.size)
