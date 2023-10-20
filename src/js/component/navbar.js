import React, { useContext } from "react";
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const deleteHandler = (favorite) => {
		console.log(favorite)
		// actions.deleteFavorite(index)
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<span className="navbar-brand">
					<Link to={'/'}>
					<img 
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAh1BMVEX///8AAACjo6P5+fmEhITw8PC8vLyMjIwFBQWwsLCSkpIoKCjo6Og3Nzd0dHTW1taamprFxcUODg5DQ0Pi4uIeHh5XV1cuLi6oqKjc3NxfX196enrT09NRUVHz8/PNzc1qamrBwcFISEi3t7eWlpY1NTUUFBQtLS1/f39LS0sbGxsTExNlZWWoIOiJAAARcElEQVR4nO1d2XbrqhI0HuLIUzwkThw7sRwnO5P///suoBG6GgFWzn1RrXX2yrEQEsVU3TSo1+vQoUOHDh06dOjQoUOHDh06dOjQoUOHDh3+Goen8fBP8HUsn/HemHjPvF3Qu/WPr3/JVPIi/g5J+RiPxEf8gj+Bz5xOdn/D1GwfQ4E/SrJOHomH+B2n4Y+dJjirazBYZHlvxslN+zilNbLkk75OrtRP8j1YsrxfL5lsc75uWubqqHN9Ow9azrfApEaWfNDMnVqmwN1HkhU0Dh2GulzfrRZL1aW43LeZpYlxRdZBiH8Nqb+EeIcXJFmjwCcnmq5D4F0O9GV2v3ft5UdRI0v+OW5ILdv5B7wQQZacfFvtijcys5e2MsOokTVl57oKgiEliqzevWLrFH4fwkxmtW0nKxYVWTN29K5BzgdP6Pc4snqDR3YUDMVciM9WMnKgIksOjym5vLL+/4Zp6pFk9XqPPlXkgYRr822iIusFjB+Hi/XDQL4TmsGiyVIZLqLuNCGz6beQjRslWZCGMal1SekZZBNNltZG13fEU0sN1I1SZ8kO9k2uPpCpHXbWa8hSw+D1A/NFiOXVmTRiWJC1AO14RsUEMw1cQdaojdHmvxixtMxMiscR+d4HMhULDEzWwAZ8hcv1w81OiMcrs/BBQZaU7w/k4kYyaFsPUkl+0WwwWdR6XgBj5HS9mDwLwTmP2kTRDZF8f1XFs4eCHeyHvmQhI2Fw/eC85IesY9+NpV1996eVgvIonBMD5+ecrAdgpp1V4eb2r3D28icLCIV1owHfhHdGK/d6b/Ad6rCl5LsztSILjtvP+rJNgmyLE5KUJcv84T4Fb6fkyJX2NNuy3CWHZC0byeqjGpfX3uqO1AxSGE1JUpYse0zfyzztZKmHUepGwnklP+QIO5lMxvK/ZQHV94o/N5Csl6+9DeUOVxmpWv0G8n0ly3UCIkiAXuNNFhqgUix0A3Dk5oh5g6G+h2QxXToHlO8yoz5TNpKbN1kqpU11erXr4RWNIgqqT7la7QKS5VYy0D4WSjdsaEGQ1vcn64GSdbm6G6rnY7efWhxwOARjyELyPXOcgsEMNUNvslAbmFM1F4oh67j8J1y5x5CFhqFMeaFpckvHGG+y5L3PIJnz7TxwYPMYoBm9RARZUL7/yyb0B9pHpDFtu25Yso53dZyRs++uDVtFsA5qZXvecgsjEWSNgXS6z+tqQmflEa3GAFFKVjw8fP/NQGZsDlUSKnYyRJD1A1ThMh+s7kAD/yCP8CeLigTRyhqPYBeAdRE2+FI4WVC+l9Mg6DhLYrdisp5tLMAqdB+NAeG4gRWRQSpGRoeFk4XkezVr7akpcU/YjfdnvToKGYSLQ1IpD32KLoSTheR7Us5aK7BWuLbFSzxZm9ZWZT5AHyigxCnS5cFkQfn+XBmFYOolxnQ0Wc9OGRSGHwdbX1hABJN1ZuR7EbxwoZVCtEYsWVtBLfVoDNZIL+aYQ1d/MFnI1jvV5g9Epv1WcWTNpIhrQTaUGDkE6Aw2u2CyUHXU7R9kTNv2URRZKpKj3UUZlwBdIC9UKFnQP2UQCJZfT5ZyiSBrNldcEU/gdVDzNA5dwQIplCwk35WpVTmgUzDvCjMgK5wspRTFpvXgUpUtswyJfFuhZP0CH8aYCG87hWVMQ7KckWrKd/IXC+5n1iDoA40fSBYVmD1kp9hZJqb3AJJ1wIFvGlzQxPUYc4U9AI92IFlIvo8WXxb2tsi2jGlI1q5hWvGJY5uE4v2REyPIlRZIFnCFemFuPIYhy8GWCsH+WQydBR97RZtTME32arKiVziXRovkyHIog0ePUseRxfkwBI0SDiOLi05rhDnWsWQ5NKfHmp4uYBIGvp/80JcMI4uLe2zGv3oV8mSxXiaVYOUqdUFW3OsBCNpBw8gS0UvnhoPTQZaLLSf+giz7pyCyoHz3g5yJf8r/4cjaLuLZapuse1DWILJg4IInRM25wpH1on1ycWy1TVYCDJEgsogXLwD7Wq48WVojRIXYtk3WMxBgIWRB+e6LU82YdpClXkikEfm3TNYAKIcgsmDwjDdExZCLLN220qjs2yTrHYmkELKQfL9ZMiCD27OxlYUnS/t0U3dRANolSzUs6g8KIAvKd14i2tmeK2+Im6w4ttolK4Xr3gFknYHv554nyw68rVmmDWSpde1gS6FVspTEBVNZAFlIvsu02+SJYgleu+rFTWRpD1kgW22SpfZxoHjmALIEKOKcc/UK6vCv5odGsrQlGMZWi2SpJWnobfYn6wi6MQj6yAH0a+XWbiZLr3MS55sL7ZGlmvUa+m38yULyPaHhRDmQZVQGhHuQpRdzpgGGaFtkrdSC2xR7+/3JQvKd2fWlAGzuMh7Jh6xsV/TY25ncClmzvj5FgQTQ5VjQ+AhMFud9dwR+2dOBpGOt/4C77+/tUWqlJ9WF5/JXQdY4Fvu0ODuEjTyRZUonxk3qHAVAluwWczPheJI6xhVp3jza6QtjWpI1pC9LhvTRd/byHylNTVCQdTUcroIFvAGQtcFZ825znH6ZkwVB5r/jd0gxWyBr4VwWSeE9lIIRkzs/BG9hej3q/2MyA810tmzeT1NANv9YJOfkdNw1LeKe4L3UiX+/xE/hcz7gbVXq0hPzysxgsVslZ48C/webUzt06NChw/8Jc7Fe367X5J9qzXInwGX1z20VQTbAudQ1gsCZ1LJjl8E2t0335v88TKcf2+HZPzhrdB5vH6c+WcvCZI4wiHLN0rHztHyrM5OgcqOsPIQMFyj84XGvgenSh69BPyzjPOYNoQwAZrS1QrmYg7Vn3drzOSqQU1Vzj3ttPDeFaL8GH17YyzarvI4sKB9tLp7Vn/ZlnSSpuYFlmp2VyeDdWKyBj6lnd2a3tCiy7NxZzA5Pl6xsF6dHIQ8ESZ8OM698M7LQVkjdVPJmg1zjGrUFBuS4Mxdr8AEMBgR7Ut88NATimPHFG2KvugO+BcSCZe+/gjVaUQR8ITk25eug0/fMxZr35mXzLRuxH0yWChdUbHCP1Osgm6DjjPLSwBqt1koE+6aV01uAEHizRX407zxOWK9YBFmyLSvfA1601VZ74FaKnA+06q5fUJfOCE8xUTq9ZR+7JVcv9Wx5Z3oFdtN6HFnZrAPZUttqQrfo5C+Ha7ToNxNHuFyxCRfsL7UWa3hneg1sQGkkWXppAI/H4fnlZOEaLVqLq/8URKKDmcy9bmDXd+9gO2qWXLeJJUuvPZMmpFbtwrdSFCSBUz16RcCTs//cZYTCrRVfRrgrGhcndotlo2iiyVKbF4ld8BN1YlPxbjh6JZMU/Kib53Cv70/RJUO+0xl3SoqxZmJ748kCO1NvPIZPgOIuXKNZ5PDFOW1kzecNKBpTV4HNuqo92gxwO9/jyVIVac1P87iNJ2V5/qEazXSScO4Z0gMTjH4xdRUaOp7gLstf9JgryCK76X3mZSaf7A9co7LBrO4aQmLVWAT3nj7Wx/w7JC1ewCEyzJSOyTquLEA1MLHibVAspw9KsnCNyslp+N4QEis12hlFv5j1h6SFPmgEnGeFlgUwWcDUBf1rZ/XDfeTO3qpAsEblY6abhiMhlExHPdU8QBRJC+3UseXEChxU1+PIegBsfVJbxKqT78gg34osXKOlY4KHbh8gfsYIUoDDhHbqEKGKh0iWrHRRh8qRWhtz0xT7ZMe/Q/q25VGVAdeodvikOOcCeomSEG3u34Pn1OKawJMvS5bVjVWsBzHorfOw2PMPE9BQTdRendboSaVo6OD64wOkC98Yq79IvqtT6b6dgaE1sGTZ74w0lBXHs+HMwkauypxxjaoUDUvOSr2vya+mj0yAWBip0Pp9GhiK99B5k4UqfWEW7Zkx3+Qk9zHbuVAOdbhGX/B4a2DKGNFV6U5Ivqv2iMTwGzKm/cn6phPSwpTM3D5cVeueIz+u0T73RY0aJmC+NI/wQK7YTOCD+DU4vvmT9Uk7mTVm3XCOXzX6eroDoXtk5kH2DrBsRjyiQS1TXuBcAmiUe5OF2uqj+XjWa+Y8DsUENqbXHpYBuM84b+AOnVKWKS90YB3SZL6z4WgKSmGTs+FC7/ThzV5Ljvhk9X3afCeNzzLrF3kPi6eBukRqnyXr3dihskClPdojZuI8xcPvxAJ4svrJwzK4IfNl33AYTcGgVjh1wHCGXNT+Cp4+akFkoGB9f6qWoSVvA7qGB1EnKxnORNhkC6cOmijBOOttG36TZAPaeCe8c0CtOPscNoaOHgTwODzQHELR9PZaNncg5L6oRYDJIvF9Z5BoCIIjheO8doE+nkHhNXO+euxKMJ2r6JswlaoDa4VgwTben6UkChldEvRjDmUDpM35Mu4RE2eP1mcsrcFTXip7AXmt6SgdTZZ6OlBV30jN5Og72l0FdPQgwcVjXcQoLPwmTJUCOSSofyyWrMEDM72tHSJhiKYJAh+V4bEwYnowkHyvVws4Rop6XiPJmq05E2bkEglbZO3aAEcP2lh5zAJ7ew2MlLOeAqwV0p4bR5Z2LzpEAnt4q09HhL50E3uPJmqMB3Dxv54CGShkTogh6/UZyq7ai7GjztmjSXicuKWe33Deork4gZZC7oxKBZqVqI0IsrSf7dO9MMWyxR56VQM6e9aAjhJs+PinKW7RodIyxWNa4sPjo1bhZCXN1araDyOEHHF1JZjPlFXI4k/d8SfGie1QvhMzhdD/aOkgSNbI1QtUs2mKk1FsMdOVh43Y+LVKWczPhvVcMw/kywAb6m0xbH/UCpK1cyxo+h1alrCpXjy+Y/HpTqOIwHGCFczWiTr2bHW0sLKZsGMqIVn3rhf5lWK32a5dc92EPdawhoZYRt1OgDVXh0FP9CGNVmtjyHIsliurRfxu3PhlWxb7maEaGqJkdQwpjhMsYNITfSqdtbmcI8vBlvuzUSWY9rPyMRDB+FEh8ya4Y5BMetDCvhesvfUsWQ62dhcPrrhqP/h8P5P95rdC5ivgIz8VTHpEtLfAvJMnS0wd3Xx05wb/bl5krVzfUck7oPMoUaOQx/jvQaRGD+HIWjewFQ2vbuhsCyIztF2nXB0NR+MVX2W5MSZdjqxHZbQ8/AFbPgO8c5QpvAmu89PMgRnGyPnBPLiMI+tBezabFs0jMPQabB3GdOkrQCZMjtv6BHHVqXRGfARP1h+xxX4ZzYBDGYlCwfG9y5QeV51KZ0y6DrK0+6DtDxE3mjI52NNfDqVL7MAa00vDTIFhC74wXKgusv6CrYlnNbPGdK09Cc5KMD5EBRvpx+cjxCdZgKqfnOUk6w/YEp6fOGRbYO0DvNzShulQR8Of41Q610et3GRlnqMW2Rp7f6nIdo/kqJPIRH5aG3SYU+k42GK4Pj00kJXVQWtsqdw8t6vgb36bozXzauYiIJJsKigDbUk9gbqsxSM1kZUdMt3Wp5hu/S1axpg2dDtjTBuTODo6jQ/YB/TXBslGstpk66MsxtdwPB7uZ1/q2TeoBTHGtGkR4jjBk6G6mVPpGCMc9NnaWkczWVlPbIEtFbVUDM79fvqWJDNdZw+4luHR2WYxsTFtLhGiU+n4jb3ImVOV3oOsLF7o6g99ad99pZ2Sve4OOGRPAR7KbnW8DVraMKqWO5WOEdtIZ1Tk+5CVsbW56ptMK/uzTk+arMWqN5z4jx92MZE43xlaFUQiW/3UBIgfqcLQ5mhCmdk+jdGnnlaHp6h5cbQa32qfT71aMrKOl54YMWSpvQ+3JoQlFnRAN01Ts4I2NIFKwXq2n+hDf8sampNrWXa2A6hUJuTRTVgXd5oCMiOrJ1abHkPWDdRBZi4w6q5mX78yaor1/zDH2CUFWRDEWzZY3jJJ/WBr7ZyshXwPhqwBzMecaejnuxSq69zeDo4rjv5sFfSHKxzIZ7d8dhPCYbukjoacrKMcT7lXHyCEpYGXSSbNOQ5cufH5sTcE59ShQ4cOHTp06NChQ4cOHTp06NChQ4cOHQz8DzqHBjZJqwWEAAAAAElFTkSuQmCC"
						width="90"
					/>
					</Link>
				</span>
				<div class="dropdown">
  					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites 
						<span className="badge mx-1">{store.favorites.length}</span>
  					</button>
  					<ul class="dropdown-menu">
						{store.favorites.length === 0 ? <p className="text-center">Add a favorite!</p>:
						store.favorites.map((item, idx) => {
							return(
								<li className="d-flex align-items-center" key={idx}>
									<Link idx={idx} class="dropdown-item" to={`/${item.category}/${item.index}`}>{item.name}</Link>
									<button onClick={() => actions.deleteFavorite(idx)}>
										<i class="fa-regular fa-trash-can"></i>
									</button>
								</li>
							)
						})
						}
  					</ul>
				</div>
			</div>
		</nav>
	);
};