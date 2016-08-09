from PIL import Image
import glob

for name in glob.glob('*.tif'):
    im = Image.open(name)
    name = str(name).replace('.tiff','')
    name = name.replace(" ","")
    im.save(name + '.jpg', 'JPEG')

for name in glob.glob('*.tiff'):
    im = Image.open(name)
    name = str(name).replace('.tiff','')
    name = name.replace(" ","")
    im.save(name + '.jpg', 'JPEG')

print "Conversion from tif/tiff to jpg completed!"
