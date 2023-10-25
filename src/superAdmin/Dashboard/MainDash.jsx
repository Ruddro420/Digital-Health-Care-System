import SuperDashboard from "../SuperDashboard";

const MainDash = () => {
    return (
        <div>
            {/* <section>
                <h3 className="section-head">Overview</h3>
                <div className="analytics">
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            visibility
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total Category</h4>
                            <h1>10 Unit</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            eyeglasses
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total Product</h4>
                            <h1>3 Unit</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            unsubscribe
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total Sell</h4>
                            <h1>5 $</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            favorite
                        </span></div>
                        <div className="analytic-info">
                            <h4>Process Order</h4>
                            <h1>4 Unit</h1>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="graph-card">
                    <h3 className="section-head">Manage Data</h3>
                    <div className="graph-content">
                        <div className="graph-board">
                            <SuperDashboard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainDash;