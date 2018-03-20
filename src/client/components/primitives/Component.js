/**
 * @class Component
 * @classdesc Primitive component containing universal component methods.
 */
class Component
{
    /**
     * @constructor
     * @desc Provides a default name, otherwise applies the passed name to a class-wide variable
     * @param {object} props 
     */
    constructor(props = { name: 'Unnamed Component' })
    {
        this.name = props.name;
    }

    /**
     * @method getName
     * @static
     * @desc Get the name of the component
     * @returns {string} this.name
     */
    static getName()
    {
        return this.name;
    }
}


export default Component;
