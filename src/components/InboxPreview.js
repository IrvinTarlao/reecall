import React from 'react';
import MessagePreview from './MessagePreview';
import FilterPreview from './FilterPreview';
import { connect } from 'react-redux';

const InboxPreview = ({ inbox }) => {

    let filteredArray = [];
    if (inbox.value) inbox.messages.map((el) => {
        if (el.from.toLowerCase().includes(inbox.value)) filteredArray.push(el)
        if (el.subject.toLowerCase().includes(inbox.value)) filteredArray.push(el)
        if (el.message.toLowerCase().includes(inbox.value)) filteredArray.push(el)
    }
    );

    const duplicates = [];
    const noDuplicates = filteredArray.filter((el) => {
        if (duplicates.indexOf(el.id) == -1) {
            duplicates.push(el.id);
            return true;
        }
        return false;
    });

    const messagesToDisplay = () =>{
        if (!inbox.value) return inbox.messages;
        else if (inbox.value && filteredArray.length === 0 ) return [];
        else return noDuplicates;
    } 

    return (
        <div style={{ maxHeight: "100%", overflow: "scroll" }}>
            <FilterPreview />
            {messagesToDisplay().map((message, i) =>
                <MessagePreview message={message} key={'inboxPrev' + i} clicked={inbox.id||0} />
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    inbox: state.inbox
})

export default connect(mapStateToProps)(InboxPreview);