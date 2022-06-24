
export type PostData={
    postDate:string;
    title:string;
    post:string;
    tags:string[];
}

export const allPosts:PostData[] = [
    {
      postDate:"6/20/22", 
      title:"first title", 
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      tags:["test tag", "another tag"]
    }, 
    {
      postDate:"6/21/22", 
      title:"second title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["another tag"]
    },
    {
      postDate:"6/23/22", 
      title:"third title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"] 
    },
    {
      postDate:"6/23/22", 
      title:"fourth title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third", "coding", "teamwork"]
    },
    {
      postDate:"6/25/22", 
      title:"fifth title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["coding", "gripes"]
    },
    {
      postDate:"6/25/22", 
      title:"sixth title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third", "yet another tag", "a", "bunch", "of", "tags"]
    },
    {
      postDate:"6/27/22", 
      title:"seventh title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third", "what if there are a bunch of tags", "and they are all really quite long", "how does that affect the way that tags are displayed on Jenna's capstone blog?"]
    },
    {
      postDate:"6/27/22", 
      title:"8th title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"]
    },
    {
      postDate:"6/27/22", 
      title:"9th title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"]
    },
    {
      postDate:"6/27/22", 
      title:"10th title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"]
    },
    {
      postDate:"6/27/22", 
      title:"11th title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"]
    },
    {
      postDate:"6/27/22", 
      title:"12th title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"]
    },
    {
      postDate:"6/27/22", 
      title:"13th title", 
      post: "Convallis aenean et tortor at risus viverra. Netus et malesuada fames ac turpis. Sed pulvinar proin gravida hendrerit lectus a. \n Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt id aliquet risus feugiat in ante metus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas sed tempus. Etiam sit amet nisl purus in mollis nunc. Commodo sed egestas egestas fringilla.", 
      tags:["tag the third"]
    }
  ];

  //Prepends # to tags
  for (let j = 0; j < allPosts.length; j++) {
    for (let i = 0; i < allPosts[j].tags.length; i++) {
      let withTag =  "#".concat(allPosts[j].tags[i]);
      allPosts[j].tags[i] = withTag;
    }
  }