function Thumbnail(props:any){

    return (
        <div
        className="book-cover"
        style={{
            width: 128,
            height: 192,
            backgroundImage:
                `url(${props.img})`,
        }}
    ></div>
    )

}
export default Thumbnail;