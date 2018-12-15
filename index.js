/**
 * @file   mofron-comp-footer/index.js
 * @brief  footer component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Border = require('mofron-effect-border');
const Vrtpos = require('mofron-effect-vrtpos');
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
            this.size('100%', '2rem');
            
            this.effect([
                new Border({
                    type  : 'top',
                    color : [128, 128, 128]
                })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return mf.func.getColor(this.style('border-top-color'));
            }
            /* setter */
            this.effect('Border').color(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Footer;
/* end of file */
