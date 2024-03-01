import { useEffect, useRef } from "react"

const UploadWidget = ({setter}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
        useEffect(() => {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: 'dytjoh7oh',
                uploadPreset: 'zax5qsda'
            }, function(error, result) {
                if (result.event === 'success') {
                    setter(result.info.url)
                }
            })
        }, []);
    return (
    <button style={{height: 30, width: 100 }} onClick={() => widgetRef.current.open()}>
        Upload
    </button>)
}


export default UploadWidget