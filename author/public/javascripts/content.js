var StoryTitle = React.createClass({
    render: function() {
        return (
            <div className="titleBox">
                <p>Welcome</p>
                <h1>A Storytellers fortune</h1>
            </div>
        );
    }
});

React.render(
    <StoryTitle />,
    document.getElementById('content')
);