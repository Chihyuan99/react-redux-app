import NewBookmark from "../components/NewBookmark";
import { addBookmark } from "../actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBookmark: (bookmark) => {
            dispatch(addBookmark(bookmark));
        },
    };
};

export default connect(null, mapDispatchToProps)(NewBookmark);
