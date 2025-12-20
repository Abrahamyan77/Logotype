import './post.css';


const Post = ({ item, index}) => {
    
    const hendleClick = (index) => {
        console.log('Post clicked:', index);
    };
    
    return (
        <div key={index} className="post__item" onClick={() => hendleClick(index)}>
            <img src={item.img} srcSet={item.img_2x} alt={item.title} className='post__img' />
            <div className='post__info'>
                <h4 className='post__tags'>{item.tags}</h4>
                <h2 className='post__title'>{item.title}</h2>
                <div className='post__autor-date'>
                    <span className='post__autor'>{item.autor}</span>
                    <span className='post__date-views'>{item.date}</span>
                    <span className='post__date-views'>{item.views}  Views</span>
                </div>
                <p className='post__text'>{item.text}</p>
            </div>
        </div>
    );
}
export default Post;