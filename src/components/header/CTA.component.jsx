// import CV from "../../assets/cv.pdf";
import { emojisplosion, emojisplosions } from "emojisplosion";

const CTA = () => {
    const cvHandler = ()=> {
        // emojisplosion();
        alert(`Sorry, I'm too lazy to update my CV. So, I removed it.`)
        var rect = document.getElementById('cv').getBoundingClientRect();
        var ycoordinate = rect.top;
        var xcoordinate = rect.left;
            
            emojisplosion({
                position: {
                    x: xcoordinate + 40,
                    y: ycoordinate,
                },
            });
    }
    return (
        <div className="cta">
            <a className="btn" id='cv'  onClick={cvHandler}>Download CV</a>
            {/* <a className="btn" href={CV} download>Download CV</a> */}
            <a  className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>
    )
}

export default CTA;
