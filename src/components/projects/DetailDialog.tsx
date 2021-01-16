import cn from 'classnames';
import './DetailDialog.scss';
import temp from '../../static/images/background.jpg';

export interface DialogInfo {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
}

interface DetailDialogProps extends DialogInfo {
    on: boolean;
    offDialog: () => void;
}

function DetailDialog({ on, title, subtitle, description, images, offDialog }: DetailDialogProps) {
    return (
        <div className={cn('modal', { on })}>
            <div className="modal-overlay" onClick={offDialog}></div>
            <div className="modal-content">
                <div className="modal-image-wrapper">
                    <img src={temp} alt="detail" className="modal-image" />
                </div>
                <div className="modal-info">
                    <div className="modal-title-wrapper">
                        <h2 className="modal-title">{title}</h2>
                        <h3 className="modal-subtitle">{subtitle}</h3>
                    </div>
                    <p className="modal-description">{description}</p>
                </div>
                <span className="modal-close" onClick={offDialog}>
                    <i className="fa fa-times"></i>
                </span>
            </div>
        </div>
    );
}

export default DetailDialog;
