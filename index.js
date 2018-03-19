/**
 * @file   mofron-comp-footer/index.js
 * @brief  footer component for mofron
 * @author simpart
 */
let mf = require('mofron');
/**
 * @class mofron.comp.Footer
 * @brief footer component for mofron
 */
mf.comp.Footer = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('Footer');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.size('100%', 200);
            this.style({
                'border-top' : 'solid 1px ' + new mf.Color(240,240,240).getStyle()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Footer;
/* end of file */