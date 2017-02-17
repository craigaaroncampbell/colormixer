const express = require('express');
const PORT = process.env.port || 3000;
express().use(express.static(__dirname + '/'))
.listen(PORT, () => process.stdout.write('up on 3000'));
console.log('up on port: 3000');
});
