

import "./Upload.scss"

const serverUrl = "http://localhost:3000/upload"
export function Upload() {

    async function handleUpload(e){
        e.preventDefault()
        //get form data
        const title = e.target.title.value
        const uploader = e.target.name.value
        const image = e.target.uploadImage.files[0]

        const formData = new FormData()
        formData.append('title', title);
        formData.append('uploader', uploader);
        formData.append('image', image);

        try {
            let response = await axios.post(serverUrl, formData)
            console.log(response)
        }catch(err){
            console.error(err)
        }

        console.log("image is being uploaded")
    }
    return (
        <>
            {/* navbar here */}
            <section className="upload" onSubmit={handleUpload}>
                <h1 className="upload__heading">Upload Yer Image</h1>
                <form className="upload__form">
                    <label className="upload__label">Image Title</label>
                    <input type="text" name="title" placeholder="Image Title"></input>

                    <label className="upload__label">Uploader Name</label>
                    <input type="text" name="name" placeholder="Your Name"></input>

                    <label className="upload__label">Choose Image</label>
                    <input type="file" name="uploadImage"></input>

                    <button>Toss yer image up on there</button>
                </form>


                <div className="upload__confirmation">
                    
                </div>
            </section>
        </>
    )
}