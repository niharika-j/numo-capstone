import React from 'react';
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Navbar.scss';

class Navbar extends React.Component {
    state = {
        openNavModal: false
    };

    render(){
        const closeIcon = (
            <svg height="311pt" viewBox="0 0 311 311.07733" width="311pt" xmlns="http://www.w3.org/2000/svg"><path fill="#f5f5f5" d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path fill="#f5f5f5" d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg>
        );

        const openModal = () => {
            this.setState({openNavModal: true});
        }
    
        const closeModal = () => {
            this.setState({openNavModal: false});
        }
        return (
            <div className='navbar'>
                <div className="desktop-navbar position-right">
                    <div className="navbar-link">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to='/background'>Background Research</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to='/merchants'>Merchants</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to='/consumers'>Consumers</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to='/prototypes'>Prototype</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to='/team'>Team</Link>
                    </div>
                </div>
    
                <div className="mobile-navbar" onClick={() => openModal()}><i className="fas fa-bars"></i></div>

                <Modal open={this.state.openNavModal} onClose={() => closeModal()} classNames={{modal: "mobile-nav-modal"}} closeIcon={closeIcon}>
                    <div className="nav-modal-block">
                        <div className="navbar-modal-link">
                            <Link to='/' onClick={() => closeModal()}>Home</Link>
                        </div>
                        <div className="navbar-modal-link">
                            <Link to='/background' onClick={() => closeModal()}>Background Research</Link>
                        </div>
                        <div className="navbar-modal-link">
                            <Link to='/merchants' onClick={() => closeModal()}>Merchants</Link>
                        </div>
                        <div className="navbar-modal-link">
                            <Link to='/consumers' onClick={() => closeModal()}>Consumers</Link>
                        </div>
                        <div className="navbar-modal-link">
                            <Link to='/prototypes' onClick={() => closeModal()}>Prototype</Link>
                        </div>
                        <div className="navbar-modal-link">
                            <Link to='/team' onClick={() => closeModal()}>Team</Link>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default  Navbar;