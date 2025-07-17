import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'
import { Avatar_01 } from '../../../../Routes/ImagePath'

const Badges = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <Header />
                    <Sidebar />
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="content-page-header">
                            <h5>Badges</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Badges</h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge bg-primary">Primary</span>
                                        <span className="badge bg-secondary">Secondary</span>
                                        <span className="badge bg-success">Success</span>
                                        <span className="badge bg-info">Info</span>
                                        <span className="badge bg-warning">Warning</span>
                                        <span className="badge bg-danger">Danger</span>
                                        <span className="badge bg-dark">Dark</span>
                                        <span className="badge bg-light text-dark">Light</span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        
                        
                   

                     
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Soft Rounded Badges </h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge rounded-pill badge-soft-primary">
                                            Primary
                                        </span>
                                        <span className="badge rounded-pill badge-soft-secondary">
                                            Secondary
                                        </span>
                                        <span className="badge rounded-pill badge-soft-success">
                                            Success
                                        </span>
                                        <span className="badge rounded-pill badge-soft-info">Info</span>
                                        <span className="badge rounded-pill badge-soft-warning">
                                            Warning
                                        </span>
                                        <span className="badge rounded-pill badge-soft-danger">
                                            Danger
                                        </span>
                                        <span className="badge rounded-pill badge-soft-dark">Dark</span>
                                        <span className="badge rounded-pill badge-soft-light text-dark">
                                            Light
                                        </span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        
                     
                    </div>
                    <div className="row">
                        
                      
                      
                        {/* Badge with icons */}
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Badge with icons</h5>
                                        </div>
                                        <div className="card-body">
                                            <span className="badge bg-secondary me-1">
                                                <span className="badge-label">Secondary</span>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className="badge bg-success me-1">
                                                <span className="badge-label">Success</span>
                                                <i className="fa-solid fa-check" />
                                            </span>
                                            <span className="badge bg-info me-1">
                                                <span className="badge-label">Info</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-warning me-1">
                                                <span className="badge-label">Warning</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-danger me-1">
                                                <span className="badge-label">Danger</span>
                                                <i className="fa-solid fa-x" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Outline Badge with icons</h5>
                                        </div>
                                        <div className="card-body">
                                            <span className="badge bg-outline-secondary me-1">
                                                <span className="badge-label">Secondary</span>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className="badge bg-outline-success me-1">
                                                <span className="badge-label">Success</span>
                                                <i className="fa-solid fa-check" />
                                            </span>
                                            <span className="badge bg-outline-info me-1">
                                                <span className="badge-label">Info</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-outline-warning me-1">
                                                <span className="badge-label">Warning</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-outline-danger me-1">
                                                <span className="badge-label">Danger</span>
                                                <i className="fa-solid fa-x" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Badge with icons */}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Badges
