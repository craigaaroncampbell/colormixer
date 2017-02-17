const express = require('express');
const PORT = process.env.port || 3000;
express().use(express.static(__dirname + '/build'))
.listen(PORT, () => process.stdout.write('up on 3000'));
