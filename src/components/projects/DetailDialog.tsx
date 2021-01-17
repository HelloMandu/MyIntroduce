import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import './DetailDialog.scss';

SwiperCore.use([Pagination, Navigation]);

export interface DialogInfo {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    github: string;
    techList: string[];
}

interface DetailDialogProps extends DialogInfo {
    on: boolean;
    offDialog: () => void;
}

function DetailDialog({ on, title, subtitle, description, images, offDialog, github, techList }: DetailDialogProps) {
    return (
        <div className={cn('modal', { on })}>
            <div className="modal-overlay" onClick={offDialog}></div>
            <div className="modal-content">
                {on && (
                    <Swiper
                        className="modal-image-wrapper"
                        spaceBetween={50}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide className="modal-image-slider" key={index}>
                                <img src={`${process.env.PUBLIC_URL}/${image}`} alt="detail" className="modal-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                <div className="modal-info">
                    <section className="modal-section-wrapper">
                        <h2 className="modal-title">{title}</h2>
                        <h3 className="modal-subtitle">{subtitle}</h3>
                    </section>
                    <section className="modal-section-wrapper">
                        <h3>Tech</h3>
                        <p className="modal-tech-list">{techList.join(' / ')}/</p>
                    </section>
                    <p className="modal-description">{description}</p>
                    <a className="modal-github-link" href={github} target="_blank" rel="noreferrer">
                        <div className="modal-github">
                            <i className="fa fa-github"></i>
                            <span>바로가기</span>
                        </div>
                    </a>
                </div>
                <span className="modal-close" onClick={offDialog}>
                    <i className="fa fa-times"></i>
                </span>
            </div>
        </div>
    );
}

export default DetailDialog;
