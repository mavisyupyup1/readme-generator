// //write an array of questions for user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


module.exports =[
    {
      type:'input',
      name: 'title',
      message:'What is the title of your project? (Required)',
      validate: titleInput =>{
        if(titleInput){
          return true;
        }else{
          console.log ('Please enter project title!')
          return false;
        }
      }
    },
    {
      type:'input',
      name:'description',
      message:'Enter your project description: (Required)',
      validate: descriptionInput=>{
        if(descriptionInput){
          return true;
        } else { 
          console.log('Please enter your Description')
          return false;
        }
      }
    },
    {
      type:'confirm',
      name:'confirmTable',
      message:'would you like to enter a table of content for this README file',
      default:true
    },
    {
    type:'input',
    name:'installation',
    message:'Please enter installation instruction'
    },
    {
        type:'input',
        name:'usage',
        message:'Please enter usage information'
    },
    {
        type:'input',
        name:'test',
        message:'What are the test instructions'
    },
    {
        type:'checkbox',
        name:'license',
        message:'Choose licenses for your application.(Check all that apply)',
        choices:['apache-2.0','gpl-3.0','mit','mpl-2.0','lgpl-3.0']
    },
    {
      type:'input',
      name:'other',
      message:'If other, please specify:',
      when:({license})=>{
        console.log('when')
        if(license ==='other'){
          console.log("true")
          return true;
        } else {
          console.log('false')
          return false;

        }
      }
    },
    {
        type:'input',
        name:'github',
        message:'What is your github username?',
        validate: githubInput=>{
            if(githubInput){
                return true;
            } else {
                console.log('You must enter your github username')
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email' ,
        message:'What is your email address?',
        validate: email =>{
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if(valid){
                return true;
            } else {
                console.log('Please enter a valid email address')
                return false;
            }
        }
        }       
    

  ]