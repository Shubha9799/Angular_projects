import logo from '../logo.svg';

export default function Maincont(props) {
    return (
        <>


            {/* <button className="btn btn-primary " type="button" >
                Dropdown button
            </button> */}

            <div className='row'>
                <div className='col-4'>
                    <div className="card" >
                        <img src={logo} width="100" height={100} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">React JS</h5>
                            <p className="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</p>
                            <a className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>

                <div className='col-4'>
                    <div className="card" >
                        <img src="https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36" width="100" height={100} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Angular</h5>
                            <p className="card-text">Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google </p>
                            <a className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>

                <div className='col-4'>
                    <div className="card" >
                        <img src="https://miro.medium.com/max/600/1*4_n18FH8hRrvlLyRufD1sQ.png" width="100" height={100} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Node JS</h5>
                            <p className="card-text">Node.js is an open-source back-end JavaScript runtime env. that executes JavaScript code outside a web browser</p>
                            <a className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}