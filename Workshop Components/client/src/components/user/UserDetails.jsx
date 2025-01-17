import formatDate from "../../utils/dateParser";


export default function UserDetails(props) {
    
    return (
        <div class="overlay">
            <div class="backdrop" onClick={props.close}></div>
            <div class="modal">
                <div class="detail-container">
                    <header class="headers">
                        <h2>User Detail</h2>
                        <button class="btn close" onClick={props.close}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="xmark"
                                class="svg-inline--fa fa-xmark"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                ></path>
                            </svg>
                        </button>
                    </header>
                    <div class="content">
                        <div class="image-container">
                            <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                alt=""
                                class="image"
                            />
                        </div>
                        <div class="user-details">
                            <p>
                                User Id:{" "}
                                <strong>{props.user._id}</strong>
                            </p>
                            <p>
                                Full Name:
                                <strong> {props.user.firstName} {props.user.lastName} </strong>
                            </p>
                            <p>
                                Email: <strong>{props.user.email}</strong>
                            </p>
                            <p>
                                Phone Number: <strong>{props.user.phoneNumber}</strong>
                            </p>
                            <p>
                                Address:
                                <strong>
                                    {" "}
                                    {Object.values(props.user.address).join(", ")}
                                   
                                </strong>
                            </p>

                            <p>
                                Created on:{" "}
                                <strong>{formatDate(props.user.createdAt)}</strong>
                            </p>
                            <p>
                                Modified on:{" "}
                                <strong>{formatDate(props.user.updatedAt)}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
