export function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode >= 48 && charCode <= 57){
            return true;
            }else{
                evt.preventDefault();
            }
        }
        export function isAlphabetOnlyKey(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
                  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
                    return true;
                    }else{
                     evt.preventDefault();
                    }
                }       

                export function isAlphabetWithSpaceKey(evt) {
                    var charCode = (evt.which) ? evt.which : evt.keyCode;
                          if (charCode === 32 || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
                            return true;
                            }else{
                             evt.preventDefault();
                            }
                        }
                        
                        

                export function isSpaceKey(evt)
                {
                    var charCode=(evt.which) ? evt.which : evt.keyCode;
                    if(charCode === 32)
                    {
                        evt.preventDefault();
                    }
                    else
                    {

                    }
                }
