function CarouselItem(props) {

  return (
    <div>
      <img
        srcSet={`${props.picture.pic300} 300w, ${props.picture.pic600} 600w`}
        alt={props.picture.title}
      />
      <h2>{props.picture.title}</h2>
    </div>
  );
}

export default CarouselItem;
