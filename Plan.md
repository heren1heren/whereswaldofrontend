_todo_
creating onCLick event handler that pop up a dialog to choose targets of the clicked areat
_plan_
home page:

<!-- contains nav bar: links to record -->

<!-- contains footer: made by cookie turtle and a link to my github -->

     contains main section:
         contains links and images of each levels -> redirect to  seperate game page

game Page:
contains scoring and timer sections

    contains an image inside a container that is clickable:
      contains  an click event listener  inside the image
      after click: pop up a options container to choose & circling the clicked area
       if click out side -> pop down the options container
      ...

after players finish game -> let them fill there name inside the record

_Problem_
how to link image local source to img tags?
try: storing image inside database
then creating get api to these images

Pixels coordinates need to by synchornized between different srceen size and different zoom size
trying-solutions: normalizing pixels coordinate based on how currently big is the image on the screen based on pixels
