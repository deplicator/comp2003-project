COMP2003 - Fall 2013 End of Semester Project
============================================

Justin Pflughaupt

James Pryor


Design Document
---------------
###Purpose
Present the Computer Science department capabilities and degree requirements to the target audience.


###Target Audience
Current and potential computer science students at Prairie View A&M University.


###Organizational Structure
* Main/Welcome
    * Department Mission
    * Faculty Research
* Degree Information
    * High School Preparation
    * Undergraduate
    * Minoring
    * Graduate
* Resources
    * Thesis Manuals
    * Thesis Resource Links
* Contact
    * Directory


###Multimedia Elements
* Text
* An image or two


###Layout and Design
* Uses a responsive design.
* Adheres to the [PVAMU Web Styling Guide](http://www.pvamu.edu/pages/6438.asp).
* Mobile browser friendly version of CSS (mobile browser detected with javascript).
* Made with [Notepad++](http://notepad-plus-plus.org/).
* Libraries used:
   * [jQuery 1.10.2](http://jquery.com/)
   * jQuery Plugin: [Tablesorter 2.0](http://tablesorter.com/docs/)

####Layout Diagram

| Menu        | Submenu        | Description                                                                     |
|-------------| ---------------|---------------------------------------------------------------------------------|
| Welcome     |                | Landing page, filled with things to entice students into the CS field.          |
|             | Mission        | Department mission and goals.                                                   |
| Degree Info | High School    | What potential CS students coming to PVAMU from high school would want to know. |
|             | Minoring       | What students looking to minor in CS would want to know.                        |
|             | Undergrad      | What students seeking a CS degree would want to know.                           |
|             | Graduate       | What students seeking advanced degrees would want to know.                      |
| Resources   | Thesis Manuals | Helpful information for graduate students.                                      |
|             | Thesis Links   |                                                                                 |
| Contact     | Directory      | How to make general iqueries or find specific people within the CS department.  |


Deviations from Official Requirements
-------------------------------------
This project does not meet the strict eight page requirement because there is only a signle html file. We used hash
navigation and jQuery to create a multiple page effect. This allows for pretty transitions between pages because 
that is important. Extra care has been taken to allow for the use of bookmarks and the browser's back button.

We opted for a search engine friendly text/css logo over an image. It makes use of the free 
[Google Web Fonts](http://www.google.com/fonts), and the font has been localized.

Finally, because it was our intent to make a product so great the department would consider it as a replacement 
for the official Computer Science department website*, we originally did not include a sound or video file.
There is now a video with helpful tips for computer science freshman and a hidden easter egg that will
play music.


 *As it is on the due date, Friday November 22, 2013, this project is not a valid drop in replacement for the school's
 Computer Science website. Although, it could be a foundation for a new site maintained by Computer Science students.
 
