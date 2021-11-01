
const getStorage = localStorage.getItem('postId')

fetch(`https://jsonplaceholder.typicode.com/posts/${getStorage}`)
    .then(response => response.json())
    .then((data) => {
       
        let postLayout = document.getElementById('post-layout')
        let html = `
        
            <div class=" col-lg-6 col-md-12 col-sm-12 mt-3">
                
                <div class="card mt-5" id='${data.id}'>
                    <div class="card-body" id='${data.id}'>
                        <h6 class="post-body text-center text-success">${data.id}</h6>
                        <h5 class="post-title mb-4">${data.title}</h5>
                        <p class="post-body">${data.body}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-end mt-3">
                <a href="index.html"><button class="btn btn-success" type="submit">Back to Home</button></a>
            </div>
            </div>
        `

        postLayout.innerHTML = html

    })