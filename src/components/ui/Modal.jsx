const Backdrop = (props) => {
    return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-gray-700 bg-opacity-75' onClick={props.onClose}/>;
  };
  
  const ModalOverlay = (props) => {
    return (
      <div className='fixed top-1/3 left-[50%] w-[80%] md:w-[60%] lg:w-[50%] bg-white p-4 rounded-lg shadow-xl z-30 transform -translate-y-1/2 -translate-x-1/2'>
        <div>{props.children}</div>
      </div>
    );
  };
  
  const Modal = (props) => {
    return (
      <>
        <Backdrop onClose={props.onClose}/>
        <ModalOverlay>{props.children}</ModalOverlay>
      </>
    )
  }
  export default Modal;
  