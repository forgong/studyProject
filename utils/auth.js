module.exports = {
    isOwner:function(req, res) {
        if (req.session.isLogined) {
            return true;
        } else{
            return false;
        }
    },
    
    statusUI:function(req, res) {
        let authStatusUI = `<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href='/login'>LOGIN</a>`
        if (this.isOwner(req, res)) {
            authStatusUI = `<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href='/logout'>LOGOUT</a>`;
        }
        return authStatusUI;
    }
  }