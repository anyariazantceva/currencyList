"use strict";
class Table {
    constructor (options) {
        this.rows = [];

    if (typeof options !== "object") {
        options = {};
    }

    if (typeof options.tableClass !== "undefined") {
        this.tableClass = options.tableClass;
    } else {
        this.tableClass = "";
    }

    if (typeof options.openTableTag !== "undefined") {
        this.openTableTag = options.openTableTag;
    } else {
        this.openTableTag = "<table class='" + this.tableClass + "'>";
    }

    if (typeof options.closeTableTag !== "undefined") {
        this.closeTableTag = options.closeTableTag;
    } else {
        this.closeTableTag = "</table>";
    }

    if (typeof options.openRowTag !== "undefined") {
        this.openRowTag = options.openRowTag;
    } else {
        this.openRowTag = "<tr>";
    }

    if (typeof options.closeRowTag !== "undefined") {
        this.closeRowTag = options.closeRowTag;
    } else {
        this.closeRowTag = "</tr>";
    }

    if (typeof options.openCellTag !== "undefined") {
        this.openCellTag = options.openCellTag;
    } else {
        this.openCellTag = "<td>";
    }

    if (typeof options.closeCellTag !== "undefined") {
        this.closeCellTag = options.closeCellTag;
    } else {
        this.closeCellTag = "</td>";
    }

    if (typeof options.openHeadingTag !== "undefined") {
        this.openHeadingTag = options.openHeadingTag;
    } else {
        this.openHeadingTag = "<th>";
    }

    if (typeof options.closeHeadingTag !== "undefined") {
        this.closeHeadingTag = options.closeHeadingTag;
    } else {
        this.closeHeadingTag = "</th>";
    }
};

    addCells (cellType, cells) {
        let row = [];
        let i = 0;
        [].forEach.call(cells, () => {
            
            let cell = {
                value: cells[i],
                type: cellType
            }
            i++;
            return row.push(cell);
        });

    this.rows.push(row);
    };

    addHeadingsRow() {
        this.addCells("heading", arguments);
    };

    addRow() {
        this.addCells("data", arguments);
    };

    generate() {
        let html = this.openTableTag;
        let i = 0;
        
        this.rows.forEach(() => {
            
            let row = this.rows[i];

            html += this.openRowTag;
            
            let j = 0;
            row.forEach(() => {
                
                let cell = row[j];

                if (cell.type === "heading") {
                    html += this.openHeadingTag;
                } else {
                    html += this.openCellTag;
                }

                html += cell.value;

                if (cell.type === "heading") {
                    html += this.closeHeadingTag;
                } else {
                    html += this.closeCellTag;
                }
                j++;
            });

            html += this.closeRowTag;
            i++;
        });


    html += this.closeTableTag;

    return html;
    };



};



