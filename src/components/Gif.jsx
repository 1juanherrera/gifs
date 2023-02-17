

const Gif = ({data}) => {
    return (
        <div className="gif">
            {
            data.map((gif) => (
                <div className="gif__img" key={gif.id}>
                    <div className="gif__container">
                    <img src={gif.images.downsized.url} />
                    <p>{gif.title}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Gif