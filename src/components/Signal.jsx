import PropTypes from 'prop-types'

function Signal({ signalType }) {

    return (
        <div style={{ backgroundColor: signalType }} className={`signal`}></div>
    )
}

export default Signal


Signal.propTypes = {
    signalType: PropTypes.string
}

Signal.defaultProps = {
    signalType: "#0ff"
}

