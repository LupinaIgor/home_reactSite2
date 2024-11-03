import imgFull1 from './../assets/img/portfolio/fullsize/imgFull1.jpg'
import imgThumb1 from './../assets/img/portfolio/thumbnails/imgThumb1.jpg'
import imgFull2 from './../assets/img/portfolio/fullsize/imgFull2.jpg'
import imgThumb2 from './../assets/img/portfolio/thumbnails/imgThumb2.jpg'
import imgFull3 from './../assets/img/portfolio/fullsize/imgFull3.jpg'
import imgThumb3 from './../assets/img/portfolio/thumbnails/imgThumb3.jpg'
import imgFull4 from './../assets/img/portfolio/fullsize/imgFull4.jpg'
import imgThumb4 from './../assets/img/portfolio/thumbnails/imgThumb4.jpg'
import imgFull5 from './../assets/img/portfolio/fullsize/imgFull5.jpg'
import imgThumb5 from './../assets/img/portfolio/thumbnails/imgThumb5.jpg'
import imgFull6 from './../assets/img/portfolio/fullsize/imgFull6.jpg'
import imgThumb6 from './../assets/img/portfolio/thumbnails/imgThumb6.jpg'

export default function PortfolioPage(){
    return(
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={imgFull1} title="Project Name">
                            <img className="img-fluid" src={imgThumb1} alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={imgFull2} title="Project Name">
                            <img className="img-fluid" src={imgThumb2} alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={imgFull3} title="Project Name">
                            <img className="img-fluid" src={imgThumb3} alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={imgFull4} title="Project Name">
                            <img className="img-fluid" src={imgThumb4} alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={imgFull5} title="Project Name">
                            <img className="img-fluid" src={imgThumb5} alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={imgFull6} title="Project Name">
                            <img className="img-fluid" src={imgThumb6} alt="..."/>
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}