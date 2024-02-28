import './NewPost.css'


function NewPost() {
  return (
    <div id='newpostcontainer'>
     
     <img id='myphoto' src="" alt="MyPhoto" />
     <textarea name="POST'S DESCRIPTION" id="textdescription" cols="30" rows="10" placeholder='Add Description...'></textarea>
     <textarea name="ADD TITLE" id="titledescription" cols="30" rows="10" placeholder='Add title...'></textarea>
    <button id='addpictures'>Add Pictures</button>
    <button id='submit'>Submit</button>
    </div>
    
  )
}

export default NewPost