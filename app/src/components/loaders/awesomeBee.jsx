import React from 'react';
import { Power2 } from 'gsap';
import TweenLite from './awesomeBeeFunction.js';

export default () => {

  window.onload = function () {
    blink();
    fistBump();
    flyUp();
    TweenLite.set(document.getElementsByClassName("smile"), { scale: 0.5, x: 20, y: 0, ease: 'easeInOut' });
    TweenLite.set(document.getElementsByClassName("eye-close"), { scale: 0.001, x: 0, y: -5, ease: 'easeInOut' });
    TweenLite.set(document.getElementsByClassName("eye-open"), { scale: 1, x: 0, y: 0, ease: 'easeInOut' });
  }

  function blink() {
    TweenLite.to(document.getElementsByClassName("left-hand"), 0.5, { scale: 1.5, x: -40, y: -25, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("right-hand"), 0.5, { scale: 1.5, x: 0, y: -25, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("smile"), 0.5, { scale: 1, x: 0, y: 0, ease: 'easeInOut' });
    setTimeout(function () { blink(); }, 3000);
    TweenLite.to(document.getElementsByClassName("eye-open"), 0.3, { scale: 0, x: 10, y: 20, delay: 0.5, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("eye-close"), 0.5, { scale: 1, x: 0, y: -5, delay: 0.5, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("eye-open"), 0.3, { scale: 1, x: 0, y: 0, delay: 1, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("eye-close"), 0.5, { scale: 0.001, x: 0, y: 0, delay: 1, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("left-hand"), 0.5, { scale: 1, x: 0, y: 0, delay: 4.5, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("right-hand"), 0.5, { scale: 1, x: 0, y: 0, delay: 4.5, ease: 'easeInOut' });
    TweenLite.to(document.getElementsByClassName("smile"), 0.5, { scale: 0.5, x: 20, y: 0, delay: 4.5, ease: 'easeInOut' });
  }

  function flyUp() {
    TweenLite.to(document.getElementsByClassName("wing"), 0.4, { scale: 1.1, x: 0, y: 0, ease: 'easeInOut', onComplete: lowerDown });
  }

  function lowerDown() {
    TweenLite.to(document.getElementsByClassName("wing"), 0.4, { scale: 1, x: 0, y: 0, ease: 'easeInOut', onComplete: flyUp });
  }

  function fistBump() {
    TweenLite.to(document.getElementById("bee-happy"), 1, { scale: 1, x: 0, y: 10, ease: 'easeInOut', onComplete: fistBack });
  }

  function fistBack() {
    TweenLite.to(document.getElementById("bee-happy"), 1, { scale: 1, x: 0, y: 0, ease: 'easeInOut', onComplete: fistBump });
  }

  return (
    <div id="wrapper">
      <svg id="bee-happy" viewBox="0 0 500 300" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="450px" height="360px">
        <defs>
          <radialGradient id="gradient1" cx="50.0004%" cy="50%" r="39.5751%">
            <stop stopColor="#f4b01a" stopOpacity="0" offset="1%" />
            <stop stopColor="#ca8929" stopOpacity="1" offset="99%" />
          </radialGradient>
        </defs>
        <g className="wing">
          <path d="M 171.1826 251.2891 C 171.1826 251.2891 178.5332 101.6606 96.4365 62.5869 C -0.1982 16.5986 -13.0449 143.5718 27.4697 181.2256 C 67.9854 218.877 171.1826 251.2891 171.1826 251.2891 Z" fill="#b7e2ec" />
          <path d="M 150.8584 237.416 C 150.8584 237.416 156.0273 132.1997 98.2988 104.7212 C 30.3486 72.3838 21.3115 161.667 49.8027 188.1475 C 78.293 214.625 150.8584 237.416 150.8584 237.416 Z" fill="#a2dae2" />
        </g>
        <g className="wing">
          <path d="M 279.0703 230.4404 C 279.0703 230.4404 302.7832 88.8618 387.626 69.0723 C 487.4932 45.7754 473.5547 167.2695 427.9316 194.2314 C 382.2988 221.1963 279.0703 230.4404 279.0703 230.4404 Z" fill="#b7e2ec" />
          <path d="M 288.0059 222.8525 C 288.0059 222.8525 304.6807 123.2969 364.3359 109.3789 C 434.5654 92.998 424.7627 178.4307 392.6748 197.3926 C 360.5986 216.3545 288.0059 222.8525 288.0059 222.8525 Z" fill="#a2dae2" />
        </g>
        <path d="M 224.9805 311.1514 L 237.5039 349.7852 L 250.0254 311.1514 L 224.9805 311.1514 Z" fill="#383938" />
        <path d="M 352.8467 200.3145 C 352.8467 262.9971 302.0273 313.8154 239.3457 313.8154 C 176.6611 313.8154 125.8457 262.9971 125.8457 200.3145 C 125.8457 137.6294 176.6611 86.813 239.3457 86.813 C 302.0273 86.813 352.8467 137.6294 352.8467 200.3145 Z" fill="#f2ad1b" />
        <path d="M 131.7695 162.4805 C 131.7695 162.4805 161.7158 182.085 237.5039 182.085 C 316.3877 182.085 346.2051 162.4805 346.2051 162.4805 C 346.2051 162.4805 352.6006 173.8711 352.6006 200.3145 C 352.6006 205.4229 316.8984 216.5674 237.5039 216.5674 C 160.7705 216.5674 125.2451 200.4971 125.2451 200.4971 C 125.2451 200.4971 125.2451 180.6328 131.7695 162.4805 Z" fill="#262625" />
        <path d="M 129.6436 230.4375 C 129.6436 230.4375 177.084 245.5127 237.5039 245.5127 C 307.9961 245.5127 348.6621 230.6875 348.6621 230.6875 C 348.6621 230.6875 343.7207 248.4512 334.3076 262.126 C 330.8428 267.1602 277.7334 276.5127 237.5039 276.5127 C 183.1504 276.5127 148.1133 268.5205 148.1133 268.5205 C 148.1133 268.5205 132.5352 246.3135 129.6436 230.4375 Z" fill="#262625" />
        <path d="M 177.084 295.3867 C 177.084 295.3867 202.5996 304.7559 238.4346 304.2236 C 276.0049 303.667 299.8066 296.2324 299.8066 296.2324 C 299.8066 296.2324 277.0693 314.2119 237.6348 314.6152 C 199.9619 314.999 177.084 295.3867 177.084 295.3867 Z" fill="#383938" />
        <g className="smile">
          <path scale="0" d="M 200.5049 154.8442 C 200.5049 154.8442 224.3379 160.3184 240.1582 160.0195 C 261.2637 159.6182 275.8408 154.3911 275.8408 154.3911 C 275.8408 154.3911 277.5283 178.3389 241.8633 178.3389 C 198.9961 178.3389 200.5049 154.8442 200.5049 154.8442 Z" fill="#262625" />
          <path d="M 211.9209 157.0732 C 211.9209 157.0732 217.3086 167.5771 236.9375 167.4502 C 263.6006 167.2754 266.4082 156.8638 266.4082 156.8638 C 266.4082 156.8638 251.7422 159.9404 240.2246 159.7461 C 222.7529 159.4521 211.9209 157.0732 211.9209 157.0732 Z" fill="#ffffff" />
        </g>
        <path opacity="0.498" d="M 237.5059 125.9897 C 237.5059 125.9897 223.1885 150.2686 191.4824 150.2686 C 163.9629 150.2686 148.7324 131.1382 148.7324 131.1382 C 150.4639 135.8354 164.8682 153.5273 192.3857 153.5273 C 218.2314 153.5273 232.1943 135.6265 237.5059 125.9897 Z" fill="#dca126" />
        <path opacity="0.498" d="M 237.5059 125.9897 C 237.5059 125.9897 252.8867 150.2666 284.5957 150.2666 C 312.1113 150.2666 327.3447 128.9795 327.3447 128.9795 C 325.6123 133.6758 311.2051 153.5273 283.6895 153.5273 C 257.8408 153.5273 242.8135 135.6265 237.5059 125.9897 Z" fill="#dca126" />
        <g className="left-hand">
          <path d="M 136 180.7152 L 111.9295 193.4261 L 110.3219 160.13 L 132.6746 169.5601 L 136 180.7152 Z" fill="#262625" />
          <path d="M 100.323 141.9135 C 99.8192 138.0597 98.4805 136.9008 98.1433 129.3246 C 97.8562 122.886 100.4647 116.6284 108.5032 113.7454 C 115.8238 111.1201 125.3892 115.3278 122.7709 125.4857 C 118.2647 142.9539 119.4616 142.0282 123.762 150.604 C 130.9931 165.024 123.1847 174.7568 123.1847 174.7568 C 123.1847 174.7568 126.1392 186.7091 120.7909 194.5429 C 112.0407 207.3548 102.1706 204.2594 102.1706 204.2594 C 102.1706 204.2594 99.0174 211.2592 90.4912 211.2469 C 81.9644 211.2397 76.2379 208.9475 73.7867 203.0091 C 71.0298 196.3342 73.3217 192.2127 73.3217 192.2127 C 73.3217 192.2127 69.1393 189.9082 65.9298 182.217 C 63.0358 175.2809 67.798 169.5098 67.798 169.5098 C 67.798 169.5098 61.377 161.7912 64.7292 152.7443 C 68.0825 143.6971 75.1248 140.046 80.0304 141.2227 C 88.0053 143.1351 100.8123 145.6634 100.323 141.9135 Z" fill="#262625" />
          <g>
            <path d="M 100.7125 149.2346 C 102.9071 145.1339 100.024 139.9903 99.2145 135.8032 C 97.8686 128.8424 98.4376 121.8287 103.8801 116.6325 C 107.5996 113.0813 115.5228 111.9244 119.4812 115.4582 C 121.4395 117.2066 122.4078 119.9174 122.5537 122.4634 C 122.7239 125.441 120.9507 128.5883 120.1759 131.4133 C 118.6174 137.0984 119.55 142.1019 121.5657 147.5319 C 122.9308 151.2081 125.0582 154.6328 126.012 158.4496 C 127.1825 163.1341 125.7244 169.5283 123.329 173.6015 C 120.4506 178.4959 113.8195 180.9606 108.3724 179.8453 C 107.5391 179.6744 107.1842 180.9411 108.0206 181.112 C 112.9567 182.1231 117.841 180.5921 121.6925 177.4591 C 125.9628 173.9849 127.3429 167.6698 127.6723 162.4548 C 127.9418 158.1974 126.0399 154.4893 124.3242 150.7249 C 122.9716 147.7572 121.9025 144.7005 121.0495 141.5565 C 119.8397 137.0953 121.1287 132.4701 122.5283 128.217 C 123.3228 125.8034 124.2094 123.6105 123.7428 121.0286 C 123.2918 118.5346 122.1973 116.3507 120.4174 114.5292 C 116.9736 111.0044 110.8572 111.6788 106.7032 113.4452 C 101.4966 115.6591 97.6473 121.5357 97.1905 127.1273 C 96.9195 130.443 97.4771 133.7707 98.105 137.0191 C 98.7821 140.5198 101.3818 145.1848 99.5694 148.5715 C 99.169 149.3193 100.3121 149.9832 100.7125 149.2346 L 100.7125 149.2346 Z" fill="#6c6d6f" />
          </g>
          <g>
            <path d="M 99.5595 142.425 C 93.1772 144.8545 86.5979 140.8157 80.1876 140.4561 C 75.3426 140.1844 70.5074 142.0175 67.2524 145.5941 C 63.7346 149.4597 62.6489 155.6198 63.0947 160.6479 C 63.5634 165.9319 66.5991 170.6354 70.8545 173.7411 C 79.3523 179.9433 93.8931 181.4497 99.2507 170.348 C 101.2685 166.1675 101.283 160.8329 97.8945 157.3857 C 94.1584 153.5845 86.9155 155.078 84.8175 149.501 C 84.5216 148.7147 83.2415 149.055 83.5409 149.8505 C 84.7932 153.1795 87.456 154.4755 90.7182 155.4571 C 92.9574 156.1307 95.1743 156.7312 96.9583 158.3147 C 99.275 160.371 99.5683 163.6543 99.0997 166.5124 C 98.1754 172.1469 93.4958 175.9615 88.0751 177.144 C 82.6316 178.3307 76.6238 176.1663 72.2241 173.1185 C 67.4758 169.8291 64.6103 164.9649 64.3191 159.2141 C 64.0444 153.7882 66.0255 147.7 70.5307 144.4002 C 74.621 141.4038 79.9719 141.3374 84.7022 142.4994 C 89.5751 143.6966 94.9721 145.5723 99.9112 143.6922 C 100.7001 143.392 100.3582 142.1211 99.5595 142.425 L 99.5595 142.425 Z" fill="#6c6d6f" />
          </g>
          <g>
            <path d="M 67.1179 169.9333 C 58.1783 181.2675 71.2093 195.4319 83.3335 196.0113 C 88.7465 196.27 94.4817 194.3427 98.2157 190.3824 C 99.9531 188.5399 101.1138 186.049 101.4459 183.5536 C 101.9958 179.428 99.575 176.4311 97.2867 173.2525 C 96.7954 172.5693 95.646 173.2248 96.1436 173.9156 C 98.1361 176.6831 100.3861 179.3033 100.2076 182.9099 C 100.0788 185.5163 98.6357 188.0143 96.8848 189.8718 C 93.634 193.3193 88.5246 194.6733 83.9144 194.7087 C 72.7776 194.7944 59.7947 181.3337 68.0541 170.8622 C 68.5739 170.2032 67.6439 169.2665 67.1179 169.9333 L 67.1179 169.9333 Z" fill="#6c6d6f" />
          </g>
          <g>
            <path d="M 98.1412 189.8718 C 100.458 191.7267 102.3697 193.6473 103.0509 196.6226 C 103.6478 199.2279 102.8606 202.0257 101.5261 204.2625 C 99.1199 208.2956 94.1595 210.4842 89.5969 210.6967 C 85.133 210.905 79.9678 208.6272 76.5886 205.8438 C 72.2314 202.2556 72.1786 196.9865 74.1788 192.1126 C 74.501 191.3279 73.2198 190.9896 72.9022 191.7636 C 70.7557 196.9932 71.0101 202.29 75.2107 206.3781 C 78.8847 209.9545 85.0854 212.221 90.1969 211.9829 C 95.3579 211.7422 100.3587 208.7986 102.9827 204.4 C 104.252 202.2731 104.7935 199.5195 104.4428 197.0758 C 103.9282 193.4877 101.8406 191.1549 99.0775 188.9428 C 98.4195 188.4162 97.4766 189.3395 98.1412 189.8718 L 98.1412 189.8718 Z" fill="#6c6d6f" />
          </g>
        </g>
        <g className="right-hand">
          <path d="M 344 180.6851 L 368.0706 193.3941 L 369.6782 160.1032 L 347.3248 169.5316 L 344 180.6851 Z" fill="#262625" />
          <path d="M 379.6764 141.8893 C 380.1801 138.0363 381.5187 136.8776 381.856 129.3027 C 382.1431 122.8649 379.5352 116.6084 371.4963 113.7256 C 364.1758 111.1007 354.6106 115.3075 357.2288 125.4639 C 361.735 142.9298 360.5381 142.0045 356.2378 150.5788 C 349.0068 164.9966 356.815 174.7281 356.815 174.7281 C 356.815 174.7281 353.8606 186.6786 359.2088 194.5113 C 367.9589 207.3214 377.8288 204.2263 377.8288 204.2263 C 377.8288 204.2263 380.9819 211.2251 389.508 211.2128 C 398.0346 211.2056 403.7609 208.9138 406.2121 202.9762 C 408.9695 196.3018 406.6771 192.1809 406.6771 192.1809 C 406.6771 192.1809 410.8595 189.8773 414.0689 182.1872 C 416.9629 175.2526 412.2007 169.4818 412.2007 169.4818 C 412.2007 169.4818 418.6216 161.7641 415.2694 152.7188 C 411.9162 143.6729 404.874 140.0226 399.968 141.1986 C 391.9943 143.1109 379.187 145.6391 379.6764 141.8893 Z" fill="#262625" />
          <g>
            <path d="M 380.43 148.5463 C 378.6915 145.2968 381.016 141.157 381.7215 137.8408 C 382.4136 134.5875 382.923 131.2826 382.8781 127.951 C 382.8036 122.4043 378.9771 116.1386 373.9661 113.7102 C 369.7128 111.6493 363.9405 111.0868 360.0555 114.0866 C 355.8623 117.3246 355.6031 122.7797 357.1781 127.3316 C 358.4821 131.1004 359.5466 134.9034 359.3795 138.9247 C 359.2233 142.6965 357.4305 146.716 355.928 150.138 C 354.2356 153.9907 352.3208 157.5414 352.3094 161.849 C 352.2954 167.0802 353.9899 173.2332 357.7921 176.9697 C 361.434 180.5486 367.0031 182.1015 371.9789 181.0823 C 372.8152 180.9115 372.4604 179.6449 371.6271 179.8158 C 366.1605 180.9351 360.3467 178.5488 357.0421 174.1308 C 354.1968 170.3265 353.0485 163.5387 353.8849 158.9011 C 354.5216 155.3714 356.5466 152.1183 357.9111 148.8347 C 360.1921 143.345 361.3315 138.1674 360.0483 132.2961 C 359.4385 129.5042 358.1743 126.8957 357.5609 124.117 C 357.0007 121.5824 357.9907 118.852 359.3733 116.7608 C 362.8051 111.571 370.6604 113.0456 375.1645 115.8766 C 377.849 117.5642 379.6246 121.1039 380.7165 123.9556 C 382.0593 127.4635 381.5431 131.2944 380.9441 134.8967 C 380.4967 137.5912 379.8041 140.1709 379.0003 142.7764 C 378.3134 145.0043 378.1665 147.1156 379.2869 149.2094 C 379.6872 149.9578 380.8303 149.294 380.43 148.5463 L 380.43 148.5463 Z" fill="#6c6d6f" />
          </g>
          <g>
            <path d="M 380.0886 143.668 C 384.7453 145.4403 389.8845 143.8643 394.4915 142.6799 C 399.4653 141.4013 404.3801 141.3097 408.9199 144.0131 C 413.6246 146.8151 415.375 152.6071 415.6729 157.7366 C 416.0055 163.4615 413.3645 168.5432 409.0135 172.1648 C 400.5085 179.2426 384.4499 179.8928 381.0486 167.172 C 380.282 164.3074 380.6457 161.1219 382.5548 158.7823 C 384.0558 156.9435 386.5147 156.2471 388.6996 155.6023 C 392.1547 154.5824 395.1169 153.3902 396.4581 149.8257 C 396.7576 149.0302 395.4774 148.69 395.1815 149.4762 C 393.1472 154.8828 386.3632 153.5814 382.5636 156.952 C 378.9212 160.183 378.6476 165.3867 380.4765 169.6815 C 385.2718 180.9422 399.7632 180.2366 408.443 174.2247 C 412.826 171.1882 416.1291 166.6804 416.8134 161.3302 C 417.4553 156.3062 416.488 150.1318 413.1808 146.099 C 410.0205 142.2457 405.4021 140.4883 400.4734 140.4185 C 393.7374 140.3231 387.1494 144.9546 380.4403 142.401 C 379.6417 142.0972 379.2998 143.3678 380.0886 143.668 L 380.0886 143.668 Z" fill="#6c6d6f" />
          </g>
          <g>
            <path d="M 411.9446 170.8341 C 420.3523 181.4924 407.1064 194.4579 396.0851 194.677 C 391.3737 194.771 386.4997 193.136 383.1144 189.8408 C 381.2058 187.9831 380.1377 185.4788 379.7917 182.8795 C 379.3308 179.4196 381.9781 176.495 383.8567 173.8875 C 384.3548 173.1968 383.2054 172.542 382.7136 173.2245 C 380.5603 176.2128 378.2767 179.0214 378.4676 182.8795 C 378.5953 185.4603 379.8357 187.9195 381.4075 189.9157 C 384.9124 194.3661 391.2076 196.0878 396.666 195.9795 C 408.9178 195.7357 421.6635 181.0387 412.8809 169.9052 C 412.3548 169.2391 411.4248 170.1752 411.9446 170.8341 L 411.9446 170.8341 Z" fill="#6c6d6f" />
          </g>
          <g>
            <path d="M 380.9219 188.9125 C 376.0852 192.7834 374.0225 197.964 376.7302 203.825 C 378.916 208.5561 384.2213 211.2646 389.2007 211.8964 C 394.4026 212.5558 400.4155 209.9771 404.3464 206.7399 C 409.0357 202.8782 409.2623 197.0069 407.0966 191.7324 C 406.779 190.9585 405.4978 191.2967 405.8201 192.0814 C 407.7876 196.8745 407.7333 201.6389 403.852 205.4159 C 400.6818 208.5012 395.3926 210.5046 390.9992 210.6663 C 386.3322 210.8372 381.5576 208.4391 378.8131 204.738 C 377.3379 202.7489 376.7622 200.3452 376.8057 197.9106 C 376.8688 194.3604 379.2491 191.9295 381.8581 189.8413 C 382.5227 189.3092 381.5798 188.386 380.9219 188.9125 L 380.9219 188.9125 Z" fill="#6c6d6f" />
          </g>
        </g>
        <path d="M 164.5781 7.2607 C 158.626 3.1069 148.0283 -4.5591 135.7354 3.9512 C 123.4404 12.4619 137.752 25.9019 150.1563 23.8105 C 159.7598 22.1929 164.042 16.5645 164.042 16.5645 C 164.042 16.5645 177.4717 26.1655 187.8896 46.4424 C 189.3447 49.271 194.3691 48.3994 191.5303 43.6704 C 188.6934 38.9419 174.9043 14.4668 164.5781 7.2607 Z" fill="#31302f" />
        <path d="M 135.6797 9.3433 C 135.6797 9.3433 138.4639 5.1846 143.5596 4.1421 C 153.5371 2.1011 154.5928 8.2998 154.5928 8.2998 C 154.5928 8.2998 151.875 5.1924 142.7715 7.7671 C 136.7012 9.4839 135.6797 9.3433 135.6797 9.3433 Z" fill="#666667" />
        <path d="M 303.5742 8.8833 C 309.126 4.2056 318.9814 -4.3906 332.001 2.9683 C 345.0127 10.3281 331.9824 25.0127 319.4414 24.0562 C 309.7285 23.3154 304.9541 18.1006 304.9541 18.1006 C 304.9541 18.1006 292.4492 28.8804 283.918 50.0205 C 282.7275 52.9692 277.6436 52.5571 280.041 47.5908 C 282.4365 42.625 293.9473 16.9976 303.5742 8.8833 Z" fill="#31302f" />
        <path d="M 332.542 8.3345 C 332.542 8.3345 329.3936 4.4438 324.2236 3.8691 C 314.1016 2.7422 313.6133 9.0122 313.6133 9.0122 C 313.6133 9.0122 316.0391 5.6704 325.3369 7.4082 C 331.5361 8.5664 332.542 8.3345 332.542 8.3345 Z" fill="#666667" />
        <path d="M 292.499 66.8438 C 292.499 82.8213 266.7529 95.7725 234.9863 95.7725 C 203.2236 95.7725 177.4717 82.8213 177.4717 66.8438 C 177.4717 50.8672 203.2236 37.916 234.9863 37.916 C 266.7529 37.916 292.499 50.8672 292.499 66.8438 Z" fill="#f4b119" />
        <path d="M 295.5996 68.9097 C 295.5996 84.8872 269.8525 97.8374 238.0859 97.8374 C 206.3223 97.8374 180.5713 84.8872 180.5713 68.9097 C 180.5713 52.9336 206.3223 39.9829 238.0859 39.9829 C 269.8525 39.9829 295.5996 52.9336 295.5996 68.9097 Z" fill="url(#gradient1)" />
        <path d="M 291.208 67.8765 C 291.208 83.2832 265.4619 95.7725 233.6943 95.7725 C 201.9326 95.7725 176.1807 83.2832 176.1807 67.8765 C 176.1807 52.4717 201.9326 39.9829 233.6943 39.9829 C 265.4619 39.9829 291.208 52.4717 291.208 67.8765 Z" fill="#f3ad1b" />
        <path d="M 297.3203 68.9097 C 297.3203 68.9097 286.0684 41.5342 231.0254 41.5342 C 193.8301 41.5342 162.6621 66.8442 162.6621 66.8442 C 162.6621 66.8442 193.3135 37.916 230.7666 37.8291 C 291.1211 37.6895 297.3203 68.9097 297.3203 68.9097 Z" fill="#f4b01a" />
        <path d="M 282.9863 44.4937 C 263.9414 44.4937 247.25 54.563 237.9336 69.6655 C 228.6602 53.8535 211.4932 43.2295 191.8369 43.2295 C 162.334 43.2295 138.415 67.147 138.415 96.6499 C 138.415 126.1563 162.334 150.0732 191.8369 150.0732 C 211.1797 150.0732 228.1191 139.793 237.4941 124.3984 C 246.7168 139.9063 263.6338 150.3032 282.9863 150.3032 C 312.2061 150.3032 335.8936 126.6167 335.8936 97.3975 C 335.8936 68.1807 312.2061 44.4937 282.9863 44.4937 Z" fill="#d18a28" />
        <path d="M 237.9746 96.7241 C 237.9746 122.2593 217.2754 142.959 191.7393 142.959 C 166.2051 142.959 145.5049 122.2593 145.5049 96.7241 C 145.5049 71.189 166.2051 50.4897 191.7393 50.4897 C 217.2754 50.4897 237.9746 71.189 237.9746 96.7241 Z" fill="#ffffff" />
        <path d="M 329.3145 98.79 C 329.3145 124.3262 308.6152 145.0254 283.0791 145.0254 C 257.543 145.0254 236.8447 124.3262 236.8447 98.79 C 236.8447 73.2559 257.543 52.5552 283.0791 52.5552 C 308.6152 52.5552 329.3145 73.2559 329.3145 98.79 Z" fill="#ffffff" />
        <path d="M 202.3018 99.5151 C 197.9941 99.0117 195.001 94.3223 195.6172 89.0449 C 196.0625 85.2251 198.2861 82.1685 201.1084 80.9463 C 198.1709 78.6108 194.6377 77.2437 190.8359 77.2437 C 180.625 77.2437 172.3477 87.0723 172.3477 99.1992 C 172.3477 111.3257 180.625 121.1538 190.8359 121.1538 C 201.0469 121.1538 209.3242 111.3257 209.3242 99.1992 C 209.3242 98.1816 209.2451 97.188 209.1328 96.2075 C 207.4346 98.4863 204.9326 99.8218 202.3018 99.5151 Z" fill="#31302f" />
        <path className="eye-open" d="M 296.3018 99.5151 C 291.9941 99.0117 289.001 94.3223 289.6172 89.0449 C 290.0625 85.2251 292.2861 82.1685 295.1084 80.9463 C 292.1709 78.6108 288.6377 77.2437 284.8359 77.2437 C 274.625 77.2437 266.3477 87.0723 266.3477 99.1992 C 266.3477 111.3257 274.625 121.1538 284.8359 121.1538 C 295.0469 121.1538 303.3242 111.3257 303.3242 99.1992 C 303.3242 98.1816 303.2451 97.188 303.1328 96.2075 C 301.4346 98.4863 298.9326 99.8218 296.3018 99.5151 Z" fill="#31302f" />
        <path d="M 233.0908 76.146 C 233.0908 76.146 220.5303 58.0688 190.5225 58.0688 C 164.4795 58.0688 150.0625 76.3062 150.0625 76.3062 C 151.7031 71.8281 164.4893 50.9238 190.5225 50.144 C 210.6201 49.5415 229.0283 62.5552 233.0908 76.146 Z" fill="#ebebeb" />
        <path d="M 323.8818 76.7915 C 323.8818 76.7915 311.7363 60.2905 281.7275 60.1289 C 255.6846 59.9893 242.2607 76.9204 242.2607 76.9204 C 243.9238 72.4536 255.7344 52.8462 281.7705 52.2056 C 301.8701 51.7104 318.8457 63.2314 323.8818 76.7915 Z" fill="#ebebeb" />
        <g className="eye-close" transform="scale(0.0001)" fill="#31302f">
          <path d="M 308.0439 102.0742 C 308.0439 107.8687 303.0908 98.7256 285.7207 98.7256 C 264.5684 98.7256 260.7148 107.8687 260.7148 102.0742 C 260.7148 96.2793 271.3125 91.582 284.3799 91.582 C 297.4492 91.582 308.0439 96.2793 308.0439 102.0742 Z" fill="#262625" />
        </g>
      </svg>
    </div>
  )
};
