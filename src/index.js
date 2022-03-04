
const dogCommentForm = document.querySelector("#comment-form")

fetch('http://localhost:3000/images')
 .then((resp)=> resp.json())
 .then( function (dogArray){
     dogArray.forEach (function(dogArray){
         renderDog(dogArray)
     })
    })

dogCommentForm.addEventListener("submit", addNewComments)
    
function renderDog(dog){
    const dogTitle = document.querySelector("#card-title")
    dogTitle.textContent = dog.title

    const dogImage = document.querySelector("#card-image")
    dogImage.src = dog.image

    const dogLikes = document.querySelector("#like-count")
    dogLikes.textContent = dog.likes

    const likeButton = document.querySelector("#like-button")
    likeButton.addEventListener("click", function(e){
        ++dog.likes
        dogLikes.textContent = dog.likes
    })

}
   // const commentOne = document.querySelector()
    
    // const commentListOne = document.querySelector("#comments-list").children[0]
    


function addNewComments(event){
    event.preventDefault()
    const commentList = document.querySelector("#comments-list")

    const newComment = document.createElement("li")
    newComment.textContent = document.querySelector("#comment").value
    

commentList.append(newComment)    
}  
