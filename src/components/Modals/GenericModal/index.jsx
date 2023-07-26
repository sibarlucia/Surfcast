import Modal from 'react-modal'

export const GenericModal = ({ isOpen, onClose, label = '', className = '', children }) => {

    const customStyles = {
        overlay: {
            zIndex: 99
        },

        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '1em',
            boxShadow: '0px 4px 4px 0px #00000040',
            padding: '2em',
            maxHeight: '90vh',
        },
    };
  
    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel={label}
            className={className}
        >
            {children}
        </Modal>
    )
}