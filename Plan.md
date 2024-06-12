_todo_
re-organizing code

-> Writing test
/
/

/
/

start to work on zoom in mouse-over event
_plan_
home page:

game Page:
contains scoring and timer sections

    contains an image inside a container that is clickable:
      contains  an click event listener  inside the image
      after click: pop up a options container to choose & circling the clicked area
       if click out side -> pop down the options container
      ...

after players finish game -> let them fill there name inside the record
_feature_:
zoom in mouse move event

    How to get the position (coordinates) of the mouse pointer while hovering over the image?
    How to extract the part of the image around a given position?
    How to display the extracted part of the image in a separate box?
    How to show the cursor of the bounds over the image?

_Problem_

how to link image local source to img tags?
try: storing image inside database
then creating get api to these images

Pixels coordinates need to by synchornized between different srceen size and different zoom size
trying-solutions: normalizing pixels coordinate based on how currently big is the image on the screen based on pixels
