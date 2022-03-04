
const dogCommentForm = document.querySelector("#comment-form")

fetch('http://localhost:3000/images/1')
 .then((resp)=> resp.json())
 .then(function(dogs){
         renderDog(dogs)
     })


dogCommentForm.addEventListener("submit", addNewComments)
    
function renderDog(dog){
    const dogTitle = document.querySelector("#card-title")
    dogTitle.textContent = "buddy"

    const dogImage = document.querySelector("#card-image")
    dogImage.src = dog.image

    const dogLikes = document.querySelector("#like-count")
    dogLikes.textContent = dog.likes

    const likeButton = document.querySelector("#like-button")
    likeButton.addEventListener("click", function(e){
        ++dog.likes
        dogLikes.textContent = dog.likes
    })
    
    const commentListOne = document.querySelector("#comments-list").children[0]
    commentListOne.textContent = dog.comments[0].content
 
    const commentListTwo = document.querySelector("#comments-list").children[1]
    commentListTwo.textContent = dog.comments[1].content
   
    const commentListThree = document.querySelector("#comments-list").children[2]
    commentListThree.textContent = dog.comments[2].content

}


function addNewComments(event){
    event.preventDefault()
    const commentList = document.querySelector("#comments-list")

    const newComment = document.createElement("li")
    newComment.textContent = document.querySelector(".comment-input").value
    

commentList.append(newComment)    
}  

