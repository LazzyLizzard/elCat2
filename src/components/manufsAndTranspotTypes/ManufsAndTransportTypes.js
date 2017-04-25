/**
 * Created by Sergei_Frolov1 on 25.04.2017.
 */
import * as Actions from '../../actions/getManufAndTransportTypes'

class ManufsAndTypes extends Component {

    componentDidMount() {

    }

}


function mapDispatchToProps(dispatch) {
    return {
        loadDefaultPage: () => dispatch(Actions.getManufsAndTypes())
    }
}

export default connect(null, mapDispatchToProps)(ManufsAndTypes);