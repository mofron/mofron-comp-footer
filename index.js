/**
 * @file   mofron-comp-footer/index.js
 * @brief  footer component for mofron
 * @license MIT
 */
const Border = require('mofron-effect-border');
const Vrtpos = require('mofron-effect-vrtpos');
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (dict) component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name('Footer');
            this.config(p1);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.size('100%', '2rem');
            this.effect(
	        new Border({ position: 'top', color: [128, 128, 128], tag: "Footer" })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * background color setter/getter
     * 
     * @param (mixed) (mixed (color)) string: color name, #hex
     *                array: [red, green, blue, (alpha)]
     * @param (dict) style option
     * @return (mixed) string: text color
     *                 null: not set
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
            return this.baseColor(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * border color setter/getter
     * 
     * @param (mixed) (mixed (color)) string: color name, #hex
     *                array: [red, green, blue, (alpha)]
     * @param (dict) style option
     * @return (mixed) string: text color
     *                 null: not set
     * @type parameter
     */
    accentColor (prm, opt) {
        try {
	    if (undefined !== prm) {
                this.effect({ name: "Border", tag: "Footer" }).color(prm);
	    }
	    return cmputl.color(this, "border-top", prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
