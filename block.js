exports.BlockHeader = class BlockHeader {
    constructor(version, previousBlockHeader, merkleRoot, time, nBits, nounce) {
        this.version = version; // Version - 4つのブロックバージョンがあります。バージョン1はジェネシスブロック（2009年）、そしてバージョン2はBitcoin Core 0.7.0（2012年）でソフトフォークされたものです。バージョン3のブロックは、Bitcoin Core 0.10.0（2015年）でのソフトフォーク。バージョン4のブロックは、Bitcoin Core 0.11.2（2015年）でBIP65。
        this.previousBlockHeader = previousBlockHeader; // previous block header hash - 前のブロックのヘッダーのSHA256(SHA256())ハッシュ。このブロックも変更する必要があるため、前のブロックが変更できないことを保証する。
        this.merkleRoot = merkleRoot; // merkle root hash - a merkle tree is a binary tree which holds all the hashed pairs of the tree.
        this.time = time; // minerがヘッダーのハッシュを開始したUnixエポックタイム。
    }
};

exports.Block = class Block {
    constructor(blockHeader, index, txns) {
        this.blockHeader = blockHeader;
        this.index = index; // GenesisBlockは最初のブロック - ブロック0
        this.txns = txns; // txnsはブロック内の生のトランザクションである。
    }
}