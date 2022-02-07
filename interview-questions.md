# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 
        The foreign key would be on the Student model. by creating a new column and importing it. In order to migrate the foreign key either (not sure) an add_foreign keyn or add_column method can be used. Name i think it would be add_colum_student_name.

  Researched answer: 
        A rails generate migration add_column_to students should be called in the terminal to add a column to the student model. The column added should have the name cohort_id



2. Which RESTful routes must always be passed params? Why?

  Your answer: 
        CRUD: Create, Read, Update, and Delete must always be passed params

  Researched answer: 
        A RESTful route is a route that provides a mapping of HTTP verbs (get, post, put, patch, delete) to the CRUD actions (create, read, update, delete) that are defined in our controllers.  The show, create, edit, update, and delete are required params for RESTFUL routes.
        Show - shows an object
        Create - makes a new object
        Edit and Update - mackes changes to the object
        Delete - deltess the object

3. Name three rails generator commands. What is created by each?

  Your answer: 
        rails g controller, rails g model, rails g migration.

  Researched answer:
        rails generate with no generator name will output a list of all available generators and some information     about global options.
        rails generate model.
        rails generate migration adds a column to an exisiting model.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students          
      The method is index to display all students.

action: "POST"   route: /students       
      The method is create to generatye a new instance.

action: "GET"    route: /students/new
      The method is new for displaying a new empty form to be populated by the user.

action: "GET"    route: /students/2  
      The method is show displaying the student with id:2's information.

action: "GET"    route: /students/2/edit    
      The method is edit which will display a a populated form for student 2.

action: "PATCH"  route: /students/2   
      The method is update modifying the information contained in student 2.

action: "DELETE" route: /students/2      
      The method is destroy which deletes the instance entry from student 2.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


      The user can view a TO-DO lst task
      The user can view a due date for the task
      The user can modify the due date for a task
      The user can input a task
      The user can select a task
      The user can modify a task
      The user can close a task as being completed
      The user can delete a task
      The user can submit the task progress
      The user can view feedback from other uses involved in the task
      The user can view who is assigned to the task
      
      