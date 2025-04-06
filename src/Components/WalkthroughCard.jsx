import { Link } from "react-router-dom";

function WalkthroughCard({title,desc,img,url}) {
  return (
    <Link to={url} class="walkthrough__card-link">
      <div class="walkthrough__card">
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </Link>
  )
}

export default WalkthroughCard