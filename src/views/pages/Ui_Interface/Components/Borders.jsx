import React from 'react'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7 } from '../../../../Routes/ImagePath'

const Borders = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <Header />
                    <Sidebar />
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Borders</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Borders */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Borders</h5>
                                </div>
                                <div className="card-body">
                                    <span className="border border-container" />
                                    <span className="border-top border-container" />
                                    <span className="border-end border-container" />
                                    <span className="border-bottom border-container" />
                                    <span className="border-start border-container" />
                                </div>
                            </div>
                        </div>
                        {/* /Borders */}
                        
                        
                      
                        {/* Borders */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Border color Styling</div>
                                </div>
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control border-success"
                                            id="exampleFormControlInput1"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                                        Below Shows Danger Border
                                    </div>
                                    <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1 text-muted">
                                        Customizing borders with backgrounud colors
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Borders */}
                        {/* Borders with opacity */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Border with opacity</div>
                                </div>
                                <div className="card-body">
                                    <div className="border border-success p-2 mb-2">
                                        This is default success border
                                    </div>
                                    <div className="border border-success p-2 mb-2 border-opacity-75">
                                        This is 75% opacity success border
                                    </div>
                                    <div className="border border-success p-2 mb-2 border-opacity-50">
                                        This is 50% opacity success border
                                    </div>
                                    <div className="border border-success p-2 mb-2 border-opacity-25">
                                        This is 25% opacity success border
                                    </div>
                                    <div className="border border-success p-2 border-opacity-10">
                                        This is 10% opacity success border
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Borders with opacity */}
                        
                        {/* Sizes */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Sizes</h5>
                                </div>
                                <div className="card-body">
                                    <img
                                        src={avatar1}
                                        className="avatar-xxl avatar bd-placeholder-img bd-placeholder-img rounded-0 me-1"
                                        alt="img"
                                    />
                                    <img
                                        src={avatar2}
                                        className="avatar-xxl avatar bd-placeholder-img bd-placeholder-img rounded-1 me-1"
                                        alt="img"
                                    />
                                    <img
                                        src={avatar3}
                                        className="avatar-xxl avatar bd-placeholder-img bd-placeholder-img rounded-2 me-1"
                                        alt="img"
                                    />
                                    <img
                                        src={avatar4}
                                        className="avatar-xxl avatar bd-placeholder-img bd-placeholder-img rounded-3 me-2"
                                        alt="img"
                                    />
                                    <img
                                        src={avatar5}
                                        className="avatar-xxl avatar bd-placeholder-img bd-placeholder-img rounded-4"
                                        alt="img"
                                    />
                                    <img
                                        src={avatar6}
                                        className="avatar-xxl avatar bd-placeholder-img bd-placeholder-img rounded-5"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /Sizes */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Borders
