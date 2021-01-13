<div className={modalOn ? "display-modal" : "pending-modal"}>
  <div className="modal-infos">
    <div className="header">Le saviez vous ?</div>
    <div className="modal-text">{textModal[1]}</div>
    <div className="close-btn" onClick={() => setModal("off")}>
      Fermer
    </div>
  </div>
</div>;
