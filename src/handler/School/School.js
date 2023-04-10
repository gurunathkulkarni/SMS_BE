exports.HelloWorld = async (req, res) => {
    try {
        res.send("hello World");
    } catch (err) {
        res.send(err);
    }
}