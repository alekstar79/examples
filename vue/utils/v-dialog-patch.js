import { VDialog as VDialogOriginal } from 'vuetify/lib'

/**
* Patching VDialog because it has no way to set transition hooks
*/
function patchVDialog(VDialog)
{
    return VDialog.extend({
        methods: {
            genTransition()
            {
                const content = this.genInnerContent()

                if (!this.transition) return content

                return this.$createElement('transition', {
                    on: this.$listeners,
                    props: {
                        name: this.transition,
                        origin: this.origin,
                        duration: this.duration,
                        appear: true
                    }

                }, [content])
            }
        }
    })
}

export const VDialogPatched = patchVDialog(VDialogOriginal)
