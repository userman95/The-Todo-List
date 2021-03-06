/*jshint esversion: 6 */
import {getProjects} from '../localStorage.js';
import Project from './project.js';

class Container{
  constructor(projects){
    this.projects = projects;
  }

  addProject(project){
    this.projects.push(project);
  }

  removeProject(project){
    var index = this.projects.indexOf(project);

    if(index != -1){
      this.projects.splice(index,1);
    }
  }

  initializeContainer(){
     let container = document.createElement('div');
     container.className = "container";

     let projectContainer = document.createElement('div');
     projectContainer.id = "projectsContainer";
     projectContainer.className = "projectsContainer";

     let siteName = document.createElement('div');
     siteName.className = 'site-name';
     siteName.innerText = 'My Todo List';

     let projectContainerTitle = document.createElement('div');
     projectContainerTitle.className = 'project-title';
     projectContainerTitle.innerText = 'Projects';

     let todoContainer = document.createElement('div');
     todoContainer.id = "todosContainer";
     todoContainer.className = "todo-container";

     let todoCategories = document.createElement('div');
     todoCategories.className = "todo-categories";

     let priorityCategory = document.createElement('div');
     priorityCategory.innerText = 'Priority';
     todoCategories.appendChild(priorityCategory);

     let titleCategory = document.createElement('div');
     titleCategory.innerText = 'Title';
     todoCategories.appendChild(titleCategory);

     let descriptionCategory = document.createElement('div');
     descriptionCategory.innerText = 'Description';
     todoCategories.appendChild(descriptionCategory);

     let dueDateCategory = document.createElement('div');
     dueDateCategory.innerText = 'Due Date';
     todoCategories.appendChild(dueDateCategory);

     let completedCategory = document.createElement('div');
     completedCategory.innerText = 'Completed';
     todoCategories.appendChild(completedCategory);

     todoContainer.appendChild(todoCategories);

     projectContainer.appendChild(siteName);
     projectContainer.appendChild(projectContainerTitle);
     container.appendChild(projectContainer);
     container.appendChild(todoContainer);

     document.body.appendChild(container);

     if(getProjects() != null){
       let projects = getProjects().projects;
       projects.forEach((project)=>{
         Object.setPrototypeOf(project,Project.prototype);
         this.update(project.render());
       });
     }
 }

  update(project){
    let container = document.getElementById('projectsContainer');
    let button = document.getElementById('plusButton');
    container.insertBefore(project,button);
  }

}

export default Container;
